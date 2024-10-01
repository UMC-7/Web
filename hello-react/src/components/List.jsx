const List = (props) => {
    const {tech} = props;
    return (
        <li style={{listStyle: 'none'}}>
            {tech}입니다.
        </li>
    )
}

export default List