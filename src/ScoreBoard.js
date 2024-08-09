import './ScroeBoard.css';

function ScoreBoard({ activeBall, ball, activeStrike, strike }) {
    const renderBalls = (activeCount, inactiveCount) => {
        const activeBalls = Array(activeCount).fill('active');
        const inactiveBalls = Array(inactiveCount).fill('inactive');
        return (
            <>
                <div className="activeBoard">
                    {activeBalls.map((_, index) => (
                        <div
                            key={`active-${index}`}
                            style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                backgroundColor: 'red',
                                margin: '0 5px',
                            }}
                        />
                    ))}
                </div>
                <div className="inactiveBoard">
                {inactiveBalls.map((_, index) => (
                    <div
                        key={`inactive-${index}`}
                        style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: 'gray',
                            margin: '0 5px',
                        }}
                    />
                ))}
                </div>
            </>
        );
    };

    return (
        <div className="ScoreBoard" style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexDirection: 'column'}}>
            <div className="Ball" style={{display: 'flex', alignItems: 'center'}}>
                <div className="boardTitle">B</div>
                {renderBalls(activeBall, ball)}
            </div>
            <div className="Strike" style={{display: 'flex', alignItems: 'center'}}>
                <div className="boardTitle">S</div>
                {renderBalls(activeStrike, strike)}
            </div>
        </div>
    );
}

export default ScoreBoard;