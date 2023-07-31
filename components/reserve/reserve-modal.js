import React, { useEffect, useState } from 'react'
import Cancel from '@/components/reserve/reserve-cancel'
import Edit from '@/components/reserve/reserve-edit'
import Modal2 from '@/components/invite/invite-modal'



export default function ReserveModal({
    modalState,
    reserveDetails
}) {
    console.log('yyy', reserveDetails)
    // console.log('modalState', modalState)
    const [modalChange, setModalChange] = useState(modalState)

    useEffect(() => {
        setModalChange(modalState)
    }, [modalState])

    // console.log('modalChange:', modalChange)

    // 匯入好友名單
    const [inviteList, setInviteList] = useState([
        { inviteName: '', inviteImg: '', inviteId: 0 }
    ])
    const inviteListChange = (ivList) => {
        setInviteList(ivList)

    }
    // console.log('eee', inviteList)

    return (
        <>
            <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        {/* <div class="modal-header">
                            <button type="button" class="btn-close me-3" data-bs-dismiss="modal" aria-label="Close"></button>
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
                    iL={inviteList}
                />
                :
                ""
            }
        </>
    )
}
