/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import './ReferalIncome.css';
import {ContentHeader} from '@components';
import axios from 'axios';
import moment from 'moment';
import {API_URL, JWT_TOKEN} from '../config';

const WithdrawHistory = () => {
    useEffect(async () => {
        await fetchWithdraw();
        // eslint-disable-next-line
    }, []);

    const [withdrawDetail, setWithdrawDetail] = useState([]);

    async function fetchWithdraw() {
        try {
            const response = await axios.get(API_URL.secure_withdraw_history, {
                headers: {
                    'x-auth-token': JWT_TOKEN,
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                }
            });
            const withdrawData = response.data.data.withdrawals;
            setWithdrawDetail(withdrawData);
        } catch (error) {
            console.error(error);
        }

    }

    const showWithdraw = withdrawDetail.map((item) => {
        return (
            <tr>
                <td data-label="Date">
                    {moment(item.created_date).format('MM/DD/YY hh:mm A')}
                </td>
                <td data-label="Amount">${item.amount}</td>
                <td data-label="Received Amount">{item.payable_amount_in_dsf} DSF</td>
                <td data-label="DSF Price">${item.price_in_usd}</td>
                <td data-label="Commission">${item.commission}</td>
                <td data-label="Status">{item.status ? 'SUCCESS' : 'FAILED'}</td>
                <td data-label="Tx">{item.tx_hash || 'NA'}</td>
            </tr>
        );
    });
    useEffect(() => {
        fetchWithdraw();
        //console.log(withdrawDetail);
    }, []);
    return (
        <div>
            <ContentHeader title="Withdrawal History" />
            <div className="sa-coin">
                <table className="table table-borderless table-responsive-sm tabulardata sa-income">
                    <thead>
                    <tr className="tableHeaderCellStyle">
                        <th scope="col" className="tableHeaderStyle">
                            Date
                        </th>
                        <th scope="col" className="tableHeaderStyle">
                            Amount <br /> (in BUSD)
                        </th>
                        <th scope="col" className="tableHeaderStyle">
                            Received Amount <br /> (in DSF)
                        </th>
                        <th scope="col" className="tableHeaderStyle">
                            DSF Price
                        </th>
                        <th scope="col" className="tableHeaderStyle">
                            Commission
                        </th>
                        <th scope="col" className="tableHeaderStyle">
                            Status
                        </th>
                        <th scope="col" className="tableHeaderStyle">
                            Tx
                        </th>
                    </tr>
                    </thead>

                    <tbody>{withdrawDetail && showWithdraw}</tbody>
                </table>
            </div>
        </div>
    );
};

export default WithdrawHistory;

