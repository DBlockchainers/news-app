import React, {useEffect, useState} from 'react';
// import login from '../../'
import CIcon from '@coreui/icons-react';
import {cilCopy} from '@coreui/icons';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import {JWT_TOKEN, API_URL} from '../../config';
import moment from 'moment';

const UserInfo = () => {
    const difftoast=()=>{
       toast.info("Copied To Clipboard",{hideProgressBar: true,});
    }

    useEffect(async () => {
        await register();
        // eslint-disable-next-line
    }, []);

    const [userDetail, setUserDetail] = useState({
        wallet: '',
        referral_code: '',
        sponsor: '',
        created_date: ''
    });

    async function register() {
        try {
            const response = await axios.get(API_URL.fetch_investor_summary, {
                headers: {
                    'x-auth-token': JWT_TOKEN,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });

            setUserDetail({
                wallet: response.data.data.investor.wallet,
                referral_code: response.data.data.investor.referral_code,
                sponsor: response.data.data.investor.sponsor,
                created_date: response.data.data.investor.created_date
            });
        } catch (error) {
            console.error(error);
        }
    }

  
    return (
        <div>
              <div className='container'>
                    <img
                        width={350}
                        src="/img/dashboard.png"
                        alt="dashboardimage"
                        className="img-fluid sa-userinfo_img"
                    />
                </div>
        <div className="userInfoContainer mt-3">
            <div className="UserinfoContent">
                <div>
                    <h3 className="h4 text-theme-1  pr-3">Welcome back to CoinSpaceX Dashboard</h3>
                    <div className="mt-3">
                        <h6 className="userInfosubhead">Your Wallet address</h6>
                        <h6 className="walletAddress" >
                            {/* <span style={{ fontSize: '10px' }}>{userDetail.wallet}</span> */}
                            <span className="userInfoContent" style={{textOverflow:"ellipsis"}}>
                                {userDetail.wallet || 'NA'}
                            </span>
                        </h6>
                    </div>
                    <div className="mt-3">
                        <h6 className="userInfosubhead">Sponsor</h6>
                        <h6 className="userInfoContent">
                            {userDetail.sponsor || 'NA'}
                        </h6>
                    </div>
                    <div className="mt-3">
                        <h6 className="userInfosubhead">Referral Code</h6>
                        <h6 className="userInfoContent">
                            {`https://coinspacex.co/join/${userDetail.referral_code}` ||
                                'NA'}
                            <span className="my-2 icon">
                               <button  onClick={difftoast}  style={{background:"transparent"}} className='ml-1'><i
                                
                                    className="fas fa-clone pl-1"
                                    style={{
                                        color: '#FFC727',
                                        cursor: 'pointer',
                                        // marginTop: '30px'
                                    }}
                              
                                    onClick={() => {
                                        navigator.clipboard.writeText(
                                            `https://coinspacex.co/join/${userDetail.referral_code}`
                                        );
                                    }}
                                /></button>
                            </span>
                        </h6>
                    </div>
                    <div className="mt-3">
                        <h6 className="userInfosubhead">Joining Date</h6>
                        <h6 className="userInfoContent">
                            {moment(userDetail.created_date).format(
                                'MMM Do YYYY hh:mm A'
                            )}
                        </h6>
                    </div>
                </div>
                <div>
                    <img
                        width={350}
                        src="/img/webregister.png"
                        alt="loginimage"
                        className="img-fluid sa-userinfo_img"
                    />
                </div>
            </div>
        </div>
        <ToastContainer/>

        <div className="sa-userInfoContainer mt-2">
        <div className="UserinfoContent">
            <div>
                <h4 className=" text-theme-1 text-center">Notification</h4>
                <ul >
  <li className='sa-first_element'>Lorem ipsum dolor sit amet, consectetur
  <p className='sa-first_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Risus, elementum nullam tincidunt risus. Aliquam, eros 
tincidunt amet, id feugiat quis.</p></li>
  <li>Lorem ipsum dolor sit amet, consectetur
  <p className='sa-first_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Risus, elementum nullam tincidunt risus. Aliquam, eros 
tincidunt amet, id feugiat quis.</p>
  </li>
  <li>Lorem ipsum dolor sit amet, consectetur
  <p className='sa-first_para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Risus, elementum nullam tincidunt risus. Aliquam, eros 
tincidunt amet, id feugiat quis.</p>
  </li>
</ul>
            </div>
        </div></div>
        </div>
    );
};

export default UserInfo;
