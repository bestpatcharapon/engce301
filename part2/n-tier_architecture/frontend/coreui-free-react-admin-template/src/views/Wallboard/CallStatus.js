import React from 'react'
import { CallStatusContainer } from './style'
import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback'
import PhoneMissedIcon from '@mui/icons-material/PhoneMissed'
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver'
import QueueIcon from '@mui/icons-material/Queue'
import { Tooltip } from '@mui/material'
import { motion } from 'framer-motion'

const CallStatus = ({ OnlineAgentList, CallAgentSummaries, ServiceCode, CallQueueList }) => {
  let callOffer = 0
  let CallAbandon = 0

  Object.keys(CallAgentSummaries).map((queueName) => {
    const item = CallAgentSummaries[queueName]

    if (ServiceCode === 'ALL') {
      callOffer += parseInt(item.CallOffer)
      CallAbandon += parseInt(item.CallAbandon)
    } else if (ServiceCode === queueName) {
      callOffer += parseInt(item.CallOffer)
      CallAbandon += parseInt(item.CallAbandon)
    }
  })

  let Counter = 0

  if (ServiceCode === 'ALL') {
    Counter = OnlineAgentList.length
  } else {
    const list = OnlineAgentList.filter((item) => {
      return item.Queue === ServiceCode
    })

    Counter = list.length
  }

  let QueueCounter = 0

  if (ServiceCode === 'ALL') {
    CallQueueList.map((item) => {
      QueueCounter += parseInt(item.ConcurrentCall)
    })
  } else {
    CallQueueList.map((item) => {
      if (item.Queue === ServiceCode) {
        QueueCounter += parseInt(item.ConcurrentCall)
      }
    })
  }

  // คำนวณอัตราการละทิ้งสาย
  const abandonRate = callOffer > 0 ? ((CallAbandon / callOffer) * 100).toFixed(1) : 0

  const cardVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  }

  return (
    <CallStatusContainer>
      <motion.div 
        className="offerCall group"
        whileHover="hover"
        variants={cardVariants}
      >
        <div className="label">Offer Call</div>
        <div className="counter">
          <div className="icon pulse">
            <PhoneCallbackIcon className="icon-color" />
          </div>
          <div className="statis">
            <span className="number">{callOffer}</span>
            <span className="description">Total calls offered</span>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="abandon_call group"
        whileHover="hover"
        variants={cardVariants}
      >
        <div className="label">Abandon Call</div>
        <div className="counter">
          <div className="icon pulse">
            <PhoneMissedIcon className="icon-color" />
          </div>
          <div className="statis">
            <span className="number">{CallAbandon}</span>
            <Tooltip title="Percentage of abandoned calls">
              <span className="percentage">{abandonRate}%</span>
            </Tooltip>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className="logged_agent group"
        whileHover="hover"
        variants={cardVariants}
      >
        <div className="label">Agents</div>
        <div className="counter">
          <div className="icon pulse">
            <RecordVoiceOverIcon className="icon-color" />
          </div>
          <div className="statis">
            <span className="number">{Counter}</span>
            <span className="description">Online now</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="total_call_queue group"
        whileHover="hover"
        variants={cardVariants}
      >
        <div className="label">Total Queue</div>
        <div className="counter">
          <div className="icon pulse">
            <QueueIcon className="icon-color" />
          </div>
          <div className="statis">
            <span className="number">{QueueCounter}</span>
            <span className="description">Waiting callers</span>
          </div>
        </div>
      </motion.div>
    </CallStatusContainer>
  )
}

export default CallStatus