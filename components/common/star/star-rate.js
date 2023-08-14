

export default function StarRate() {
    const idGroup = ['rating-5', 'rating-4', 'rating-3', 'rating-2', 'rating-1']
    const valueGroup = ['5', '4', '3', '2', '1']
    const labelGroup = ['rating-5', 'rating-4', 'rating-3', 'rating-2', 'rating-1']
    return (
        <>
            <div className={`d-flex starBlock justify-content-center`}>
                <div className="star-cb-group d-flex">
                    {idGroup.map((v, i) => {
                        return (
                            <div key={i}>
                                <input
                                    type="radio"
                                    id={v}
                                    name="rating"
                                    value={valueGroup[i]}
                                />
                                <label htmlFor={labelGroup[i]} className="restRadioLabel">
                                    {valueGroup[i]}
                                </label>
                            </div>
                        )
                    })}



                </div>

            </div>

        </>
    )
}
