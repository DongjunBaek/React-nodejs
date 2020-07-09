import React, {useState} from 'react'
import { Collapse, Checkbox } from 'antd';


const { Panel } = Collapse;

function CheckBox(props) {


    const [Checked, setChecked] = useState([])    

    const handleToggle = (value) => {
        // event가 발생한 아이템의 인덱스 찾기
        const currentIndex = Checked.indexOf(value)
        // 현재 상태 checked 된 state가 Checked 인지 확인

        const newchecked = [...Checked]

        if(currentIndex === -1){
            newchecked.push(value)
            //state add
        }else {
            newchecked.splice(currentIndex, 1)
            //state remove
        }

        setChecked(newchecked)

        props.handleFilters(newchecked)
    }

    const renderCheckboxLists = ()=> props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox onChange={()=> handleToggle(value._id)}
                    checked = {Checked.indexOf(value._id)=== -1? false: true}/>
                <span>{value.name}</span>

        </React.Fragment>
    ))

    return (
        <Collapse defaultActiveKey={['0']} >
            <Panel header="Continents" key="1">

                {renderCheckboxLists()}
                
            </Panel>

        </Collapse>
    )
}

export default CheckBox
