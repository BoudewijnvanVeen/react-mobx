import React from 'react';
import { observer } from 'mobx-react';
import _ from 'lodash'

const Profile = ({ onClick, label, selected }) => {
    const classes = selected ? 'bold' : '';
    return (
        <li onClick={onClick} className={classes}>
            <i className="fa fa-user"></i> {label}
        </li>
    );
};

const Selection = ({ user }) => {
    return (
        <ul>
            <li><i className="fa fa-book fa-fw"></i> Name: {user.name}</li>
            <li><i className="fa fa-user fa-fw"></i> Username: {user.username}</li>
            <li><i className="fa fa-phone fa-fw"></i> Phone: {user.phone}</li>
            <li>
                <i className="fa fa-envelope fa-fw"></i> Email:
                <a href={"mailto:" + user.email}>{user.email}</a>
            </li>
        </ul>
    );
};

@observer
class EmployeeDirectory extends React.Component {

    renderSelection() {
        if (_.isEmpty(this.props.store.selectedUser)) return <noscript />;
        return (
            <div className='selection'>
                <Selection user={this.props.store.selectedUser} />
                <button onClick={() => { this.props.store.selectUser({}) }}>Close Profile</button>
            </div>
        )
    }

    renderProfiles() {
        return this.props.store.users.map((user) => {
            return (
                <Profile
                    selected={user.id === this.props.store.selectedId}
                    key={user.id}
                    label={user.name}
                    onClick={() => { this.props.store.selectUser(user) }}
                />
            );
        });
    }

    render() {
        return (
            <div>
                <h3>Employee Directory</h3>
                {this.renderSelection()}
                {this.renderProfiles()}
            </div>
        );
    }
}


export default EmployeeDirectory;