import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 95%;
  margin: auto;
  padding: 20px 0;
  font-family: 'Prompt', 'Kanit', sans-serif;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 15px 0;
  margin-bottom: 20px;
  border-bottom: 2px solid #f0f2f5;

  .wallboard_logo {
    width: 200px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      object-fit: contain;
    }
  }

  .wallboard_title {
    flex: 1;
    font-size: 2.8rem;
    padding-left: 30px;
    display: flex;
    align-items: center;
    font-weight: 600;
    background: linear-gradient(90deg, #2c3e50, #4b6cb7);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeIn 1s ease-in-out;
  }
  
  .datetimes {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 40px;
    
    .dateTime {
      text-transform: uppercase;
      font-size: 2.2rem;
      padding: 8px 16px;
      color: #3498db;
      font-weight: bold;
      background-color: rgba(52, 152, 219, 0.1);
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(52, 152, 219, 0.1);
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(52, 152, 219, 0.2);
      }
    }
  }
  
  .wallboard_queue {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;

    .queue_title {
      font-size: 1.8rem;
      text-transform: uppercase;
      color: #3498db;
      font-weight: bold;
    }

    select {
      width: 100%;
      padding: 10px 15px;
      border-radius: 8px;
      border: 2px solid #e5e7eb;
      font-size: 1.2rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      
      &:focus {
        border-color: #3498db;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.25);
        outline: none;
      }
      
      &:hover {
        border-color: #3498db;
      }
    }
  }
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 15px;
    
    .wallboard_logo {
      margin: 0 auto;
    }
    
    .wallboard_title {
      text-align: center;
      justify-content: center;
      padding-left: 0;
    }
    
    .datetimes {
      padding-right: 0;
    }
    
    .wallboard_queue {
      margin-top: 10px;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export const CallStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;

  .group {
    flex: 1;
    min-width: 280px;
    padding: 25px;
    border-radius: 15px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 5px;
      width: 100%;
      background: rgba(255, 255, 255, 0.3);
    }

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }

    .label {
      font-size: 1.6rem;
      text-align: center;
      color: #fff;
      margin-bottom: 15px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .counter {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 20px;

      .icon {
        color: #fff;
        opacity: 0.9;
        animation: pulse 2s infinite;

        svg {
          font-size: 2.8rem;
        }
      }

      .statis {
        font-size: 2.8rem;
        font-weight: bold;
        color: #fff;
        text-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
    }

    &.offerCall {
      background: linear-gradient(135deg, #28a745, #20c997);
      
      &:hover {
        background: linear-gradient(135deg, #218838, #1aa179);
      }
    }

    &.abandon_call {
      background: linear-gradient(135deg, #dc3545, #f86f7d);
      
      .label {
        color: #fff;
      }
      
      .counter {
        .icon {
          color: #fff;
        }

        .statis {
          color: #fff;
        }
      }
      
      &:hover {
        background: linear-gradient(135deg, #c82333, #e74c6f);
      }
    }

    &.logged_agent {
      background: linear-gradient(135deg, #17a2b8, #1fc8e3);
      
      &:hover {
        background: linear-gradient(135deg, #138496, #17a2b8);
      }
    }

    &.total_call_queue {
      background: linear-gradient(135deg, #ff9800, #ffc107);
      border: none;
      
      .label {
        color: #fff;
      }

      .counter {
        .statis {
          color: #fff;
        }
      }
      
      &:hover {
        background: linear-gradient(135deg, #e68a00, #d39e00);
      }
    }
  }
  
  @media (max-width: 992px) {
    flex-wrap: wrap;
    
    .group {
      min-width: 200px;
      margin-bottom: 15px;
    }
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    
    .group {
      width: 100%;
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
`

export const CenterBarStyle = styled.div`
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  padding: 25px;
  display: flex;
  margin: 30px 0;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  flex-wrap: wrap;

  .left {
    flex: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    overflow: hidden;
    min-width: 300px;

    .TextSlide {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0 20px;
      overflow: hidden;
      padding-left: 0;

      .MarqueeText {
        * {
          font-size: 1.8rem !important;
          color: #e74c3c;
          padding: 6px 0px;
          font-weight: 600;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  .right {
    padding: 0 20px;
    min-width: 300px;
    
    .right-title {
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-bottom: 15px;
      font-weight: 600;
      color: #2c3e50;
      border-bottom: 2px solid #e5e7eb;
      margin-bottom: 15px;
    }

    .Queue {
      width: 100%;
      height: 150px;
      background-color: #fff;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 6rem;
      font-weight: bold;
      color: #e74c3c;
      transition: all 0.3s ease;
      
      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }
    }
  }
  
  @media (max-width: 992px) {
    flex-direction: column;
    
    .left, .right {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`

export const Wallboard1Container = styled.div`
  display: flex;
  gap: 25px;
  width: 100%;
  flex-direction: column;
  margin-top: 30px;

  .line {
    display: flex;
    justify-content: space-between;
    background: #f8f9fa;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    flex-wrap: wrap;

    .group {
      flex: 1;
      border: none;
      margin: 3px;
      border-radius: 12px;
      overflow: hidden;
      transition: all 0.3s ease;
      min-width: 200px;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
      }

      .value {
        padding: 25px 15px;
        font-size: 4rem;
        font-weight: bold;
        text-align: center;
        background: #ffffff;
        color: #2c3e50;
        transition: all 0.3s ease;
      }

      .label {
        background-color: #0844a4;
        color: #ffffff;
        font-size: 1.6rem;
        text-align: center;
        font-weight: 600;
        padding: 12px 8px;
        transition: all 0.3s ease;
        text-transform: uppercase;
        letter-spacing: 1px;

        &.text-red {
          color: #fff;
          background: linear-gradient(135deg, #e61610, #ff5252);
        }
      }
    }

    &.line2 {
      background: linear-gradient(to right, #e6f2ff, #c9f1fd);
      
      .group {
        .label {
          background: linear-gradient(135deg, #4285f4, #75a9f9);
        }
        
        &:hover .label {
          background: linear-gradient(135deg, #3367d6, #5c95f5);
        }
      }
    }

    &.line3 {
      background: linear-gradient(to right, #ebf5e6, #cbe8ba);
      
      .group {
        .label {
          background: linear-gradient(135deg, #34a853, #72bb53);
        }
        
        &:hover .label {
          background: linear-gradient(135deg, #2e8b46, #5c9e3d);
        }
      }
    }

    &.line4 {
      background: linear-gradient(to right, #fff9eb, #fff1d7);
      
      .group {
        .label {
          background: linear-gradient(135deg, #fbbc04, #fec63d);
        }
        
        &:hover .label {
          background: linear-gradient(135deg, #e0a800, #eab000);
        }
      }
    }
  }
  
  @media (max-width: 992px) {
    .line {
      flex-wrap: wrap;
      
      .group {
        min-width: 45%;
        margin-bottom: 15px;
      }
    }
  }
  
  @media (max-width: 576px) {
    .line {
      flex-direction: column;
      
      .group {
        width: 100%;
      }
    }
  }
`