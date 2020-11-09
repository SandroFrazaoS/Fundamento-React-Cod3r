export default function (props) {
    if(props.text) {
        return props.children
    } else {
        return false
    }
}