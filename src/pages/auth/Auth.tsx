import { Button, Input, Tooltip } from 'antd'
import { IoInformationCircleOutline } from 'react-icons/io5'

import './Auth.scss'

const Auth = () => {
  return (
    <div className='auth__conatinner'>
      <form>
        <Input
        placeholder="Enter your username"
        suffix={
          <Tooltip title="input username for auth on yhis servise">
            <IoInformationCircleOutline style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
            <Input
        placeholder="Enter your password"
        suffix={
          <Tooltip title="input pass for auth on yhis servise">
            <IoInformationCircleOutline style={{ color: 'rgba(0,0,0,.45)' }} />
          </Tooltip>
        }
      />
      <Button type="primary" block>
        auth
      </Button>
      </form>
    </div>
  )
}

export default Auth
