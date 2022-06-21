import React from 'react';
// import {ContentHeader} from '@components';

function AdminDashboard() {
    return (
        <div>
            <div className="col-6">
                <div className="border border-1">
                    <div>
                        <h3>Users Online</h3>
                        <h3 className="text-right">27</h3>
                    </div>
                    <div className="border border-1">
                        <div classname="row">
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                            <div className="col-4"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-6">
                <div className="border border-1">
                    <div classname="row">
                        <div className="col-5"></div>
                        <div className="col-6"></div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
