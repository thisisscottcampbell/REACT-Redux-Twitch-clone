import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, content, actions, handleDismiss }) => {
	return ReactDOM.createPortal(
		<div onClick={handleDismiss} className="ui dimmer modals visible active">
			<div
				onClick={(e) => e.stopPropagation()}
				className="ui standard modals visible active"
			>
				<div className="ui standard modal visible active">
					<div className="header">{title}</div>
					<div className="content">{content}</div>
					<div className="actions">{actions}</div>
				</div>
			</div>
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
