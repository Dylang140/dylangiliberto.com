import github from '../image/github.png';
import linkedin from '../image/linkedin.png';
//import gmail from '../image/gmail.png';

export default function Contact(){
    return (
        <div className='page'> 
            <br/><br/><br/><br/>
            <table style={{marginRight: 'auto', marginLeft: 'auto'}}>
                <tbody>
                    <tr>
                        <td className='contactItem'>
                            <a href='https://github.com/Dylang140' target="_blank" className='contactImg'>
                                <img className='contactImg' src={github} />
                            </a>
                        </td>
                        <td className='contactItem'>
                            <a href='https://linkedin.com/in/Dylang140' target="_blank" className='contactImg'>
                                <img className='contactImg' src={linkedin} />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}