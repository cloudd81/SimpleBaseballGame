/* eslint-disable */
import React, {useState, useEffect} from 'react';
import './BaseballApp.css';
import ScoreBoard from './ScoreBoard';

function genAnswer() {
    const numbers = [];
    while (numbers.length < 4) {
        const randomNumber = Math.floor(Math.random() * 10).toString();
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers.join('');
}

function BaseballApp() {
    const [answer, setAnswer] = useState([]);
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [ball, setBall] = useState(4);
    const [activeBall, setActiveBall] = useState(0);
    const [strike, setStrike] = useState(4);
    const [activeStrike, setActiveStrike] = useState(0);
    const [attempts, setAttempts] = useState(0);

    useEffect(() => {
        setAnswer(genAnswer());
    }, []);

    const handleChange = (e, index) => {
        const newInputs = [...inputs];
        let inputNumber = e.target.value.trim();

        if(inputNumber !== "" && !Number.isNaN(inputNumber)) {
            console.log('숫자가 아님 : ', inputNumber);
            newInputs[index] = inputNumber;
        } else {
            newInputs[index] = "";
        }
        setInputs(newInputs);
    };

    const handleSubmit = () => {
        const userGuess = inputs.join("");
        if (userGuess.length !== 4) {
            alert("모든 칸에 숫자를 입력해 주세요.");
            return;
        }

        let strike = 0;
        let ball = 0;

        for (let i = 0; i < 4; i++) {
            if (userGuess[i] === answer[i]) {
                strike++;
            } else if (answer.includes(userGuess[i])) {
                ball++;
            }
        }

        setActiveBall(ball);
        setActiveStrike(strike);
        setBall(4-ball);
        setStrike(4-strike);
        setAttempts(attempts + 1);

        if (strike === 4) {
            alert("정답입니다!");
        }
    };

    const handleReset = () => {
        setAnswer(genAnswer());
        setInputs(["", "", "", ""]);
        setResult("");
        setAttempts(0);
    };

    return (
        <div className="BaseballApp" style={{ textAlign: "center" }}>
            <MainLogo className="MainLogo"/>
            <div className="TitleComponent">
                <ScoreBoard
                    activeBall={activeBall}
                    ball={ball}
                    activeStrike={activeStrike}
                    strike={strike}
                />
            </div>
            <div>
                {inputs.map((input, index) => (
                    <input
                        key={index}
                        type="text"
                        value={input}
                        maxLength={1}
                        onChange={(e) => handleChange(e, index)}
                        style={{
                            width: "50px",
                            height: "50px",
                            textAlign: "center",
                            fontSize: "20px",
                            marginRight: "10px",
                        }}
                    />
                ))}
            </div>
            <button onClick={handleSubmit} style={{ margin: "20px", padding: "10px 20px", fontSize: "16px" }}>
                확인
            </button>
            <button onClick={handleReset} style={{ padding: "10px 20px", fontSize: "16px" }}>
                다시 하기
            </button>
            <p>시도 횟수: {attempts}</p>
        </div>
    );
}

function MainLogo() {
    return (
        <div className="MainLogo">
            <h1>Baseball Game</h1>
        </div>
    );
}

export default BaseballApp;