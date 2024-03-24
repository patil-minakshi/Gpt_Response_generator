
import { useState } from "react";
import Userlogo from './myImage/user_logo.png'
function Roadmapgpt() {
    const [Response, setResponse] = useState([])
    const [year, setyear] = useState(0)
    const [Field, setField] = useState('html')
    const [stack, setstack] = useState('html')



    async function handleclick() {

        try {
            const response = await fetch('/prompt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    messages: [
                        {
                            role: 'system',
                            content: `Imagine that you have number of year experience in any stack and you want to know ahead that what you should learn  .\n\nI have ${year} year of experience in ${Field}. Just tell me what can I do ahead. I know this ${stack}. What should I learn more? make bullet points\n\nplease give response in bullet points\n\nin this format :\nwhat to learn next :  You know html now step toword css \nand so on ...\ndays to learn this skill :  2 weeks nedded to learn basic css and try creating project\nand so on....\n`
                        },
                        {
                            role: 'user',
                            content: "",
                        }
                    ],
                    model: {
                        name: 'openai/gpt-4'
                    },
                    variables: [
                        {
                            name: 'number',
                            value: year

                        },
                        {
                            name: 'Field',
                            value: Field
                        },
                        {
                            name: 'stack',
                            value: stack
                        }
                    ]
                })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const Data = await response.json()
            const text = Data.responseText
            const splited = text.split('\n')
            setResponse(splited)


        } catch (error) {
            console.log("Error sending prompt", error);

        }
    }


    return (


        <div className="main_page">

            <div className="Main_navbar">
                <div className="NavLogo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 14 14" fill="none">
                        <g clipPath="url(#clip0_5416_6042)">
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M6.233 3.00078C6.05752 3.30503 5.80502 3.5577 5.50089 3.73338C5.19676 3.90906 4.85173 4.00156 4.5005 4.00156C4.14927 4.00156 3.80424 3.90906 3.50011 3.73338C3.19598 3.5577 2.94348 3.30503 2.768 3.00078H1C0.734784 3.00078 0.48043 2.89542 0.292893 2.70789C0.105357 2.52035 5.21541e-08 2.26599 5.21541e-08 2.00078C5.21541e-08 1.73556 0.105357 1.48121 0.292893 1.29367C0.48043 1.10614 0.734784 1.00078 1 1.00078H2.768C2.94348 0.696529 3.19598 0.443855 3.50011 0.268174C3.80424 0.0924927 4.14927 0 4.5005 0C4.85173 0 5.19676 0.0924927 5.50089 0.268174C5.80502 0.443855 6.05752 0.696529 6.233 1.00078H10.75C11.612 1.00078 12.4386 1.34319 13.0481 1.95268C13.6576 2.56217 14 3.38882 14 4.25078C14 5.11273 13.6576 5.93938 13.0481 6.54888C12.4386 7.15837 11.612 7.50078 10.75 7.50078H10.233C10.0576 7.80526 9.80506 8.05816 9.50082 8.234C9.19659 8.40984 8.8514 8.50242 8.5 8.50242C8.1486 8.50242 7.80341 8.40984 7.49918 8.234C7.19494 8.05816 6.94241 7.80526 6.767 7.50078H3.5C3.10218 7.50078 2.72064 7.65881 2.43934 7.94012C2.15804 8.22142 2 8.60295 2 9.00078C2 9.3986 2.15804 9.78013 2.43934 10.0614C2.72064 10.3427 3.10218 10.5008 3.5 10.5008H3.768C3.94354 10.1968 4.19602 9.94431 4.50004 9.76879C4.80407 9.59327 5.14894 9.50087 5.5 9.50087C5.85106 9.50087 6.19593 9.59327 6.49996 9.76879C6.80398 9.94431 7.05646 10.1968 7.232 10.5008H11V9.50078C10.9998 9.40176 11.0291 9.30491 11.084 9.22252C11.1389 9.14014 11.2171 9.07591 11.3085 9.03799C11.4 9.00008 11.5007 8.99017 11.5978 9.00954C11.6949 9.02891 11.7841 9.07667 11.854 9.14678L13.854 11.1468C13.9477 11.2405 14.0004 11.3677 14.0004 11.5003C14.0004 11.6329 13.9477 11.76 13.854 11.8538L11.854 13.8538C11.7841 13.9238 11.6951 13.9716 11.598 13.991C11.501 14.0104 11.4004 14.0005 11.309 13.9628C11.2176 13.925 11.1394 13.8609 11.0844 13.7787C11.0294 13.6964 11 13.5997 11 13.5008V12.5008H7.233C7.05759 12.8053 6.80506 13.0582 6.50082 13.234C6.19659 13.4098 5.8514 13.5024 5.5 13.5024C5.1486 13.5024 4.80341 13.4098 4.49918 13.234C4.19494 13.0582 3.94241 12.8053 3.767 12.5008H3.5C3.04037 12.5008 2.58525 12.4102 2.16061 12.2344C1.73597 12.0585 1.35013 11.8007 1.02513 11.4757C0.700121 11.1506 0.442313 10.7648 0.266422 10.3402C0.0905302 9.91553 0 9.4604 0 9.00078C0 8.54115 0.0905302 8.08603 0.266422 7.66139C0.442313 7.23675 0.700121 6.85091 1.02513 6.5259C1.35013 6.2009 1.73597 5.94309 2.16061 5.7672C2.58525 5.59131 3.04037 5.50078 3.5 5.50078H6.768C6.94354 5.19676 7.19602 4.94431 7.50004 4.76879C7.80407 4.59327 8.14894 4.50087 8.5 4.50087C8.85106 4.50087 9.19593 4.59327 9.49996 4.76879C9.80398 4.94431 10.0565 5.19676 10.232 5.50078H10.75C11.0815 5.50078 11.3995 5.36908 11.6339 5.13466C11.8683 4.90024 12 4.5823 12 4.25078C12 3.91926 11.8683 3.60132 11.6339 3.36689C11.3995 3.13247 11.0815 3.00078 10.75 3.00078H6.233Z"
                                fill="#49A5DB" />
                        </g>
                        <defs>
                            <clipPath id="clip0_5416_6042">
                                <rect width="14" height="14" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    RoadMap.ai
                </div>
                <div className="user_logo">
                    <img src={Userlogo} alt="" />
                </div>
            </div>
            <div className="textBoxAnother">
                <p>Get your roadmap by Gpt
                    <br>
                    </br>
                    Ask Gpt What to do next by Providing following parameters
                </p>

            </div>
            <div className="main_body">
                <div className="inputGroup">
                    <div className="inputField">
                        <div className="inputLabel">
                            <label htmlFor="">Enter year of experience you have (fresher..) </label>
                        </div>
                        <div className="inputMainField">
                            <input type="text" className="inputControl" onChange={(e) => setyear(e.target.value)} />
                        </div>
                    </div>
                    <div className="inputField">

                        <div className="inputMainField">
                            <div className="inputLabel">
                                <label htmlFor="">Enter Field you Have Experienced in (Frontend , back....)</label>
                            </div>
                            <div className="inputMainField">
                                <input type="text" className="inputControl" onChange={(e) => setField(e.target.value)} />
                            </div>

                            {/* <Select className="inputControl" value = {Field} onChange ={handleclick} >
                        <option value="Front-end">Front-end</option>
                        <option value= "back-end">back-end</option>
                        <option value= "Full-stack" ></option>
                    </Select> */}
                        </div>
                    </div>
                    <div className="inputField">
                        <div className="inputLabel">
                            <label htmlFor="">Enter languages you know (HTML, CSS, JavaScript...)</label>
                        </div>
                        <div className="inputMainField">
                            <input type="text" className="inputControl" onChange={(e) => setstack(e.target.value)} />
                        </div>
                    </div>
                    <div className="buttonField">
                        <button onClick={handleclick}>Get RoadMap</button>
                    </div>
                </div>

                <div className=" Parent">
                    <div className="textBox">

                      {Response.map((line , index)=> (
                        line.trim() !== '' && line.trim().length > 0 && <p key={ index}>
                            {line}
                        </p>
                      ))}


                    </div>
                </div>

            </div>
        </div>


    )

}

export default Roadmapgpt;