import { Icon } from '@iconify/react';

const style = {
  // height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center"
}

const Loader = () => {
  return (
    <div style={style}>
      <Icon icon="line-md:loading-twotone-loop" width="50" height="50" />
    </div>
  )
}

export default Loader