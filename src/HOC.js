import Formtask from './Formtask';
export default function HOC(Component){
    return function(){
        return (
            <div>
                <Formtask />
                <Component />
            </div>
            
        )
    }
}