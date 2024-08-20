import './ZinID.css';
import { Button } from 'antd';
import { Card, Flex } from 'antd';
import { QuestionCircleOutlined,CopyOutlined } from '@ant-design/icons';


export const ZinID = () =>{
    return(
        <>
  <div className="App">
    <div className='main'>
        <Card className='main-card' bordered={false}>
    
    <div>
              <svg width="60" height="60" viewBox="0 0 97 97" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M44.3758 11.0932C46.8337 9.30021 50.1684 9.30021 52.6263 11.0932L57.2677 14.4788C58.4693 15.3554 59.9189 15.8264 61.4063 15.8235L67.1512 15.8126C70.1936 15.8068 72.8913 17.7669 73.826 20.6621L75.5909 26.1294C76.0478 27.5448 76.9437 28.7779 78.1487 29.6499L82.8028 33.0178C85.2676 34.8014 86.298 37.9728 85.3524 40.8645L83.5667 46.3249C83.1044 47.7386 83.1044 49.2627 83.5667 50.6764L85.3524 56.1368C86.298 59.0285 85.2676 62.1999 82.8028 63.9835L78.1487 67.3514C76.9437 68.2234 76.0478 69.4565 75.5909 70.8719L73.826 76.3391C72.8913 79.2344 70.1936 81.1944 67.1512 81.1887L61.4062 81.1778C59.9189 81.175 58.4693 81.646 57.2677 82.5225L52.6263 85.9082C50.1683 87.7011 46.8337 87.7011 44.3758 85.9082L39.7344 82.5225C38.5328 81.646 37.0832 81.175 35.5959 81.1778L29.8508 81.1887C26.8085 81.1944 24.1107 79.2344 23.1761 76.3392L21.4112 70.8719C20.9542 69.4565 20.0583 68.2234 18.8534 67.3514L14.1992 63.9835C11.7344 62.1999 10.704 59.0285 11.6497 56.1367L13.4353 50.6765C13.8976 49.2628 13.8976 47.7385 13.4353 46.3249L11.6497 40.8646C10.704 37.9728 11.7344 34.8014 14.1992 33.0178L18.8534 29.6499C20.0583 28.7779 20.9542 27.5448 21.4112 26.1294L23.1761 20.6621C24.1107 17.7669 26.8085 15.8068 29.8509 15.8126L35.5958 15.8235C37.0832 15.8264 38.5328 15.3554 39.7344 14.4788L44.3758 11.0932Z" fill="#0166FF" fill-opacity="0.980392" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M36 48.3333L44.3333 56.6667L61 40" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
    </div>

        <h1>ZinID Generated</h1>
        <h2 >Your ID has been created successfully, use this ID to sign up on apps</h2>

         
          <Card className='content-card' bordered={false}>
              <h3>Your ZinID </h3>
                  <h4>CHI8Z9I013N</h4>
                      <Flex className='main-flex' gap="small" align="flex-start" vertical >
                          <Flex gap="small">
                                    <Button className='copy-btn' icon={<QuestionCircleOutlined />}>How to use</Button>
                                    <Button className='copy-btn' icon={<CopyOutlined />}>Copy</Button>
                           </Flex>
                       </Flex>
                          <Flex className='content-flex'>
                                <p> This ID isn't for one-time use; you can access it anytime from your home screen.</p>
                          </Flex>
            </Card>
                <Button type="primary" onClick={MyButton} className="primary-btn" >Go to home page</Button>
              </Card>
        </div>
        
  </div>
  </>
);
}
function MyButton() {
  
    window.location.href = '/home-screen'; // navigate to /new-page

}
export default ZinID;
