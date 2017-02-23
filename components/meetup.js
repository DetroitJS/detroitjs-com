export default (props) => (
        <div className="content">
            <h3 className="title is-3">{props.title}</h3>
            <span dangerouslySetInnerHTML={{__html:props.description}}>
            </span>
        </div>
)

