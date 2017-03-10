import moment from 'moment';

export default (props) => {
    const prettyTime = moment(props.date).format('MMMM Do YYYY, h:mm a');

    return (
        <div className="content">
            <h3 className="title is-3">{props.title} - {prettyTime}</h3>
            <span dangerouslySetInnerHTML={{__html:props.description}}>
            </span>
        </div>
    )
}

