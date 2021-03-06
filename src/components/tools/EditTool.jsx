import React, { Component } from 'react';
import { connect } from 'react-redux';

// Images
import AwesomeImage from '../../imgs/todd-quackenbush-IClZBVw5W5A-unsplash.jpg';

// Actions
import { putTool } from '../../actions/toolActions';

// Axios without Auth
import toolApi from '../../api/toolsApi';

// Styles
import {
	AwesomeImg,
	BottomContent,
	CheckBoxContainer,
	Container,
	Container2,
	Container3,
	Container4,
	Container5,
	ContainerContainer,
	Form,
	FormTop,
	H4,
	H4FormText,
	H4Group,
	ImgPlaceholder,
	OtherH4,
	SubmitButton,
	TriangleTop,
	Wrapper,
} from '../tools/AddToolStyle';
import { LabelPair } from '../styles/createAccountStyle';
import { Input, InputPair, Label, LargeInput, ShortInput, ShortLabel } from '../styles/signInFormStyle';

class EditTool extends Component {
	state = {
		tool_name        : '',
		tool_description : '',
		rental_price     : '',
		length_of_rental : '',
		my_network       : false,
		my_garage_only   : false,
		rental           : false,
	};

	async componentDidMount() {
		try {
			let response = await toolApi.get(`/tools/${this.props.computedMatch.params.id}`);
			response.data.my_garage_only = response.data.my_garage_only === 1;
			response.data.my_network = response.data.my_network === 1;
			response.data.rental = response.data.rental === 1;
			this.setState(response.data);
		} catch (error) {
			this.setState({});
		}
	}

	onHandleChange = e => this.setState({ ...this.state, [e.target.name]: e.target.value });
	onHandleCheckChange = e => {
		this.setState({ ...this.state, [e.target.name]: e.target.checked });
	};

	render() {
		const { handleSubmit } = this.props;
		const {
			my_garage_only,
			my_network,
			rental,
			tool_name,
			tool_description,
			rental_price,
			length_of_rental,
		} = this.state;
		return (
			<Wrapper>
				<Container2>
					<OtherH4>Edit Tool</OtherH4>
				</Container2>
				<TriangleTop>
					<FormTop />
				</TriangleTop>
				<BottomContent>
					<Form onSubmit={() => handleSubmit(this.state)}>
						<Container>
							<ImgPlaceholder>
								<AwesomeImg src={AwesomeImage} alt='Table of Tools' />
							</ImgPlaceholder>
							<H4Group>
								<H4>This tool is available for:</H4>
								<CheckBoxContainer>
									<input
										type='checkbox'
										name='my_garage_only'
										checked={my_garage_only}
										onChange={this.onHandleCheckChange}
									/>
									<H4FormText>My Garage Only</H4FormText>
								</CheckBoxContainer>
								<CheckBoxContainer>
									<input type='checkbox' name='my_network' checked={my_network} onChange={this.onHandleCheckChange} />
									<H4FormText>My Network</H4FormText>
								</CheckBoxContainer>
								<CheckBoxContainer>
									<input type='checkbox' name='rental' checked={rental} onChange={this.onHandleCheckChange} />
									<H4FormText>Rental</H4FormText>
								</CheckBoxContainer>
							</H4Group>
						</Container>
						<ContainerContainer>
							<Container3>
								<InputPair>
									<LabelPair>
										<Label>Tool Name</Label>
									</LabelPair>
									<Input
										placeholder='Tool Name'
										type='text'
										name='tool_name'
										value={tool_name}
										onChange={this.onHandleChange}
									/>
								</InputPair>
								<InputPair>
									<LabelPair>
										<Label>Tool Description</Label>
									</LabelPair>
									<LargeInput
										placeholder='Tool Description'
										type='textarea'
										name='tool_description'
										value={tool_description}
										onChange={this.onHandleChange}
									/>
								</InputPair>
							</Container3>
							<Container5>
								<Container4>
									<InputPair>
										<LabelPair>
											<ShortLabel>Price</ShortLabel>
										</LabelPair>
										<ShortInput
											placeholder='Tool Name'
											type='text'
											name='rental_price'
											value={rental_price}
											onChange={this.onHandleChange}
										/>
									</InputPair>
									<InputPair>
										<LabelPair>
											<Label>Length of Rental</Label>
										</LabelPair>
										<ShortInput
											placeholder='Length of Rental'
											type='text'
											name='length_of_rental'
											value={length_of_rental}
											onChange={this.onHandleChange}
										/>
									</InputPair>
								</Container4>
								<SubmitButton type='submit'>Update Tool</SubmitButton>
							</Container5>
						</ContainerContainer>
					</Form>
				</BottomContent>
			</Wrapper>
		);
	}
}

const mapStateToProps = state => ({ isLoading: state.toolList.isLoading });
export default connect(mapStateToProps, { putTool })(EditTool);
