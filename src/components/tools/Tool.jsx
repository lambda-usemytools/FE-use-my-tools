import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteTool} from "../../actions/toolActions";
import {
    Bold,
    ButtonContainer,
    H1,
    Italic,
    LargeSubContainer,
    SubContainer,
    ToolButton,
    ToolContainer
} from './ToolStyle'


const Tool = (props) => {
    return (

        <ToolContainer>

            <SubContainer>
                <H1>{props.tool.location}</H1> {/*figure out how to display this*/}
            </SubContainer>

            <SubContainer>
                <img src={props.tool.image} alt='Non-working Image'/> {/*figure out how to import pic */}
            </SubContainer>

            <LargeSubContainer>
                <Bold>{props.tool.tool_name}</Bold>
                <Italic>{props.tool.tool_description}</Italic>
            </LargeSubContainer>

            <SubContainer>
                <H1>{props.tool.status}</H1>{/*figure out how this is going to be displayed pic */}
            </SubContainer>

            <ButtonContainer>
                {props.tool.owner_id === props.userId && <ToolButton><Link to={`/dashboard/edit-tool/${props.tool.id}`}>{'Edit Tool'}</Link></ToolButton>}
                {props.tool.owner_id === props.userId && <ToolButton onClick={() => props.deleteTool(props.tool.id)}>{'Delete Tool'}</ToolButton>}
            </ButtonContainer>

        </ToolContainer>
    )
};

export default connect(null, {deleteTool})(Tool);
