/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { Component } from 'react'
import { Container } from './style.js'
import { Row, Col, Card, Badge } from 'react-bootstrap'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import Parse from '../../parse-init.js'
import { BsClock, BsEnvelope, BsPersonCheck, BsActivity } from 'react-icons/bs'
import { motion } from 'framer-motion'

export default class Histories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // User login
      userLoginHistoriesData: [],
      userLoginHistoriesPage: 0,
      userLoginHistoriesTotal: 0,
      // Agent status
      agentStatusHistoriesData: [],
      agentStatusHistoriesPage: 0,
      agentStatusHistoriesTotal: 0,
      // Agent message
      agentMessageHistoriesData: [],
      agentMessageHistoriesPage: 0,
      agentMessageHistoriesTotal: 0,
      // UI State
      activeTab: 'agentMessage',
      isLoading: true,
      refreshInterval: null,
    }
  }

  async initUserLoginHistories() {
    let histories = Parse.Object.extend('UserLoginHistories')
    let queryHistories = new Parse.Query(histories)
    // Start listening for real-time updates.
    const historiesListener = await queryHistories.subscribe()
    historiesListener.on('open', () => {
      console.log('UserLoginHistories subscription opened')
    })
    historiesListener.on('create', async (object) => {
      console.log('UserLoginHistories has been created', object)
      if (this.state.userLoginHistoriesData.length >= 10) {
        this.state.userLoginHistoriesData.pop()
      }

      this.setState({
        userLoginHistoriesData: [object, ...this.state.userLoginHistoriesData],
      })
    })

    // Next query data
    const result = await Parse.Cloud.run('getUserLoginHistories', {
      page: 0,
      size: 10,
    })
    this.setState({
      userLoginHistoriesData: result.data || [],
      userLoginHistoriesPage: result.pagination.pagination || 0,
      userLoginHistoriesTotal: result.pagination.totalPage || 0,
    })
  }

  async initAgentStatusHistories() {
    let histories = Parse.Object.extend('AgentStatusHistories')
    let queryHistories = new Parse.Query(histories)
    // Start listening for real-time updates.
    const historiesListener = await queryHistories.subscribe()
    historiesListener.on('open', () => {
      console.log('AgentStatusHistories subscription opened')
    })
    historiesListener.on('create', async (object) => {
      console.log('AgentStatusHistories has been created', object)
      if (this.state.agentStatusHistoriesData.length >= 10) {
        this.state.agentStatusHistoriesData.pop()
      }

      this.setState({
        agentStatusHistoriesData: [object, ...this.state.agentStatusHistoriesData],
      })
    })

    // Next query data
    const result = await Parse.Cloud.run('getAgentStatusHistories', {
      page: 0,
      size: 10,
    })
    this.setState({
      agentStatusHistoriesData: result.data || [],
      agentStatusHistoriesPage: result.pagination.pagination || 0,
      agentStatusHistoriesTotal: result.pagination.totalPage || 0,
    })
  }

  async initAgentMessageHistories() {
    let histories = Parse.Object.extend('AgentMessageHistories')
    let queryHistories = new Parse.Query(histories)
    // Start listening for real-time updates.
    const historiesListener = await queryHistories.subscribe()
    historiesListener.on('open', () => {
      console.log('AgentMessageHistories subscription opened')
    })
    historiesListener.on('create', async (object) => {
      console.log('AgentMessageHistories has been created', object)
      if (this.state.agentMessageHistoriesData.length >= 10) {
        this.state.agentMessageHistoriesData.pop()
      }

      this.setState({
        agentMessageHistoriesData: [object, ...this.state.agentMessageHistoriesData],
        isLoading: false,
      })
    })

    // Next query data
    const result = await Parse.Cloud.run('getAgentMessageHistories', {
      page: 0,
      size: 10,
    })
    this.setState({
      agentMessageHistoriesData: result.data || [],
      agentMessageHistoriesPage: result.pagination.pagination || 0,
      agentMessageHistoriesTotal: result.pagination.totalPage || 0,
      isLoading: false,
    })
  }

  transfromStateToText(status) {
    return {
      1: 'Available',
      2: 'Active',
      3: 'Wrap',
      4: 'Not Ready',
    }[status]
  }

  transfromStateToTextColor(status) {
    return {
      1: 'bg-success text-white',
      2: 'bg-info text-white',
      3: 'bg-warning',
      4: 'bg-danger text-white',
    }[status]
  }

  transfromStateToIcon(status) {
    const icons = {
      1: <BsPersonCheck className="me-2" />,
      2: <BsActivity className="me-2" />,
      3: <BsClock className="me-2" />,
      4: <BsClock className="me-2" />,
    }
    return icons[status] || null
  }

  formatTimeAgo(date) {
    const now = new Date()
    const diff = now - date
    
    // Convert diff to minutes
    const minutes = Math.floor(diff / 60000)
    
    if (minutes < 1) return 'just now'
    if (minutes < 60) return `${minutes} min ago`
    
    const hours = Math.floor(minutes / 60)
    if (hours < 24) return `${hours} hours ago`
    
    const days = Math.floor(hours / 24)
    return `${days} days ago`
  }

  setActiveTab(tabName) {
    this.setState({ activeTab: tabName })
  }

  refreshData = () => {
    this.initUserLoginHistories()
    this.initAgentStatusHistories()
    this.initAgentMessageHistories()
  }

  componentDidMount() {
    this.initUserLoginHistories()
    this.initAgentStatusHistories()
    this.initAgentMessageHistories()
    
    // Set up auto-refresh
    const refreshInterval = setInterval(this.refreshData, 60000) // refresh every minute
    this.setState({ refreshInterval })
  }
  
  componentWillUnmount() {
    // Clear the interval when component unmounts
    if (this.state.refreshInterval) {
      clearInterval(this.state.refreshInterval)
    }
  }

  render() {
    const { activeTab, isLoading } = this.state
    
    return (
      <Container className="mt-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Navigation Tabs */}
          <div className="histories-tabs mb-4">
            <Row>
              <Col>
                <ul className="nav nav-pills nav-fill">
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'agentMessage' ? 'active' : ''}`}
                      onClick={() => this.setActiveTab('agentMessage')}
                    >
                      <BsEnvelope className="me-2" /> Agent Messages
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'agentLogin' ? 'active' : ''}`}
                      onClick={() => this.setActiveTab('agentLogin')}
                    >
                      <BsPersonCheck className="me-2" /> Agent Login
                    </button>
                  </li>
                  <li className="nav-item">
                    <button 
                      className={`nav-link ${activeTab === 'agentStatus' ? 'active' : ''}`}
                      onClick={() => this.setActiveTab('agentStatus')}
                    >
                      <BsActivity className="me-2" /> Agent Status
                    </button>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>

          {/* Content based on active tab */}
          {isLoading ? (
            <div className="text-center p-5">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">Loading histories...</p>
            </div>
          ) : (
            <>
              {/* Agent Message Histories */}
              {activeTab === 'agentMessage' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-sm border-0 mb-4">
                    <Card.Header className="bg-primary text-white d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">
                        <BsEnvelope className="me-2" /> Agent Messages
                      </h4>
                      <Badge bg="light" text="dark" pill>
                        {this.state.agentMessageHistoriesData.length} entries
                      </Badge>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <div className="table-responsive">
                        <CTable hover>
                          <CTableHead className="bg-light">
                            <CTableRow>
                              <CTableHeaderCell scope="col" width="180">Date</CTableHeaderCell>
                              <CTableHeaderCell scope="col">From</CTableHeaderCell>
                              <CTableHeaderCell scope="col">To</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Message</CTableHeaderCell>
                              <CTableHeaderCell scope="col" width="100">Time</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {this.state.agentMessageHistoriesData.map((i, key) => (
                              <CTableRow key={key} className={key % 2 === 0 ? 'bg-white' : 'bg-light'}>
                                <CTableHeaderCell scope="row">
                                  {i.get('createdAt').toLocaleString()}
                                </CTableHeaderCell>
                                <CTableDataCell>
                                  <Badge bg="primary" className="me-2">{i.get('from_agent_code')}</Badge>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <Badge bg="secondary" className="me-2">{i.get('to_agent_code')}</Badge>
                                </CTableDataCell>
                                <CTableDataCell className="message-cell">
                                  <div className="message-bubble p-2 border rounded">
                                    {i.get('message')}
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <small className="text-muted">
                                    {this.formatTimeAgo(i.get('createdAt'))}
                                  </small>
                                </CTableDataCell>
                              </CTableRow>
                            ))}
                          </CTableBody>
                        </CTable>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}

              {/* Agent Login Histories */}
              {activeTab === 'agentLogin' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-sm border-0 mb-4">
                    <Card.Header className="bg-success text-white d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">
                        <BsPersonCheck className="me-2" /> Agent Login Activities
                      </h4>
                      <Badge bg="light" text="dark" pill>
                        {this.state.userLoginHistoriesData.length} entries
                      </Badge>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <div className="table-responsive">
                        <CTable hover>
                          <CTableHead className="bg-light">
                            <CTableRow>
                              <CTableHeaderCell scope="col" width="180">Date & Time</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Agent</CTableHeaderCell>
                              <CTableHeaderCell scope="col" width="150">Action</CTableHeaderCell>
                              <CTableHeaderCell scope="col" width="100">Time</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {this.state.userLoginHistoriesData.map((i, key) => (
                              <motion.tr
                                key={key}
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: key * 0.05 }}
                                component={CTableRow}
                                className={key % 2 === 0 ? 'bg-white' : 'bg-light'}
                              >
                                <CTableHeaderCell scope="row">
                                  {i.get('createdAt').toLocaleString()}
                                </CTableHeaderCell>
                                <CTableDataCell>
                                  <div className="d-flex align-items-center">
                                    <div className="agent-avatar bg-light rounded-circle me-2 text-center pt-1" style={{width: '32px', height: '32px'}}>
                                      <BsPersonCheck />
                                    </div>
                                    <div>
                                      <div className="fw-bold">{i.get('agent_name')}</div>
                                      <small className="text-muted">{i.get('agent_code')}</small>
                                    </div>
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <Badge 
                                    bg={i.get('is_login') === '1' ? 'success' : 'danger'} 
                                    className="text-white px-3 py-2"
                                  >
                                    {i.get('is_login') === '1' ? 'Login' : 'Logout'}
                                  </Badge>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <small className="text-muted">
                                    {this.formatTimeAgo(i.get('createdAt'))}
                                  </small>
                                </CTableDataCell>
                              </motion.tr>
                            ))}
                          </CTableBody>
                        </CTable>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}

              {/* Agent Status Histories */}
              {activeTab === 'agentStatus' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="shadow-sm border-0">
                    <Card.Header className="bg-info text-white d-flex justify-content-between align-items-center">
                      <h4 className="mb-0">
                        <BsActivity className="me-2" /> Agent Status Changes
                      </h4>
                      <Badge bg="light" text="dark" pill>
                        {this.state.agentStatusHistoriesData.length} entries
                      </Badge>
                    </Card.Header>
                    <Card.Body className="p-0">
                      <div className="table-responsive">
                        <CTable hover>
                          <CTableHead className="bg-light">
                            <CTableRow>
                              <CTableHeaderCell scope="col" width="180">Date & Time</CTableHeaderCell>
                              <CTableHeaderCell scope="col">Agent</CTableHeaderCell>
                              <CTableHeaderCell scope="col" width="150">Status From</CTableHeaderCell>
                              <CTableHeaderCell scope="col" width="150">Status To</CTableHeaderCell>
                              <CTableHeaderCell scope="col" width="100">Time</CTableHeaderCell>
                            </CTableRow>
                          </CTableHead>
                          <CTableBody>
                            {this.state.agentStatusHistoriesData.map((i, key) => (
                              <CTableRow key={key} className={key % 2 === 0 ? 'bg-white' : 'bg-light'}>
                                <CTableHeaderCell scope="row">
                                  {i.get('createdAt').toLocaleString()}
                                </CTableHeaderCell>
                                <CTableDataCell>
                                  <div className="d-flex align-items-center">
                                    <div className="agent-avatar bg-light rounded-circle me-2 text-center pt-1" style={{width: '32px', height: '32px'}}>
                                      <BsPersonCheck />
                                    </div>
                                    <div>
                                      <div className="fw-bold">{i.get('agent_name')}</div>
                                      <small className="text-muted">{i.get('agent_code')}</small>
                                    </div>
                                  </div>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <Badge
                                    className={`${this.transfromStateToTextColor(i.get('status_from'))} px-3 py-2`}
                                  >
                                    {this.transfromStateToIcon(i.get('status_from'))}
                                    {this.transfromStateToText(i.get('status_from'))}
                                  </Badge>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <Badge
                                    className={`${this.transfromStateToTextColor(i.get('status_to'))} px-3 py-2`}
                                  >
                                    {this.transfromStateToIcon(i.get('status_to'))}
                                    {this.transfromStateToText(i.get('status_to'))}
                                  </Badge>
                                </CTableDataCell>
                                <CTableDataCell>
                                  <small className="text-muted">
                                    {this.formatTimeAgo(i.get('createdAt'))}
                                  </small>
                                </CTableDataCell>
                              </CTableRow>
                            ))}
                          </CTableBody>
                        </CTable>
                      </div>
                    </Card.Body>
                  </Card>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </Container>
    )
  }
}