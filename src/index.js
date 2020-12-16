import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
				author="Sam" 
				timeAgo="Today at 4:45PM" 
				comment="Best experience ever"
				avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
				author="Alex" 
				timeAgo="Today at 5:42PM" 
				comment="Amazing!"
				avatar={faker.image.image()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
				author="Jane" 
				timeAgo="Yesterday at 2:20PM" 
				comment="Hey! What do you think about the show?"
				avatar={faker.image.image()}
				/>
			</ApprovalCard>
		</div>
		);
};

ReactDOM.render(<App />, document.querySelector('#root')); 