import React, { useEffect, useState } from 'react'
import Cancel from '@/components/reserve/reserve-cancel'
import Edit from '@/components/reserve/reserve-edit'
import Modal2 from '@/components/invite/invite-modal'



export default function ReserveModal({
    modalState,
    reserveDetails
}) {
    console.log('yyy', reserveDetails)

    // reserve.js傳下來的modalState
    const [modalChange, setModalChange] = useState(modalState)

    useEffect(() => {
        setModalChange(modalState)
    }, [modalState])

    // 匯入邀請MODAL的邀請名單
    const [inviteList, setInviteList] = useState(reserveDetails.inviteListArr)

    useEffect(() => {
        setInviteList(reserveDetails.inviteListArr)
    }, [reserveDetails])


    const inviteListChange = (ivList) => {
        setInviteList(ivList)

    }

    return (
        <>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        {/* <div className="modal-header">
                            <button type="button" className="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div> */}
                        <div className='container-fluid'>
                            <div className="d-flex mx-5 my-3 row">
                                <div className={`modal-body col-4`}>
                                    {modalChange == 1 ?
                                        <div>
                                            <Edit
                                                reserveDetails={reserveDetails}
                                            />
                                        </div>
                                        :
                                        <div>
                                            <Cancel
                                                reserveDetails={reserveDetails}
                                            />
                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {modalChange == 1 ?
                <Modal2
                    onValueChange={inviteListChange}
                    alreadyInvite={inviteList}
                />
                :
                ""
            }
        </>
    )
}
