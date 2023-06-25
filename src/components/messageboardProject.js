import spaceImg from '../image/mb_space.png';
import loginImg from '../image/mb_login.png';
import commentImg from '../image/mb_comment.png';
import acctImg from '../image/mb_acctmgmt.png';

export default function MessageboardProject() {
    return (
        <div className='page'>
            <div className='row'>
                <div className='column'>
                    <h1>Messageboard Project</h1>
                </div>
                <div className='column'>
                    <a href='http://board.dylangiliberto.com' target="_blank" className='blobLink'>
                        <div className='blob' style={{ width: '100%', textAlign: 'center'}}>
                            Go to Site
                        </div>
                    </a>
                </div>
            </div>
            <div className='row'>
                <i>Space Example</i><br/><br/>
                <img src={spaceImg} style={{width: '100%'}} />
                <table><tbody>
                    <tr>
                        <td>
                            <p className='paragraph'>
                                This is a personal project that I did for fun and to learn some new skills.
                            </p>
                            <p className='paragraph'>
                                Users can register new accounts, login, and post comments! Threads, or 'Spaces', act as 
                                places where a certain topic can be discussed. Users can create new threads, and can manage
                                the threads they created by locking the thread, archiving it, or deleting it entirely.
                            </p>
                            <p className='paragraph'>
                                Users can also set custom profile pirctures, bios, and display names (nick names). Display names
                                allow users to have a simple username for logging in with, like 'Dylang140,' but have more interesting names
                                displayed on the site, like <span style={{color: 'purple'}}>😺Dylan😺</span>.
                            </p>
                        </td>
                        <td>
                            <i>Account Management Page</i><br/><br/>
                            <img src={acctImg} style={{height: '500px'}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <i>Two comments, one deleted, viewed from an admin account</i><br/><br/>
                            <img src={commentImg} style={{height: '300px'}}/>
                        </td>
                        <td>
                            <p className='paragraph'>
                                Accounts designated as administrators, which can be seen in a users page, have extra permissions on the site.
                                Administrators can delete any users comments, as well as view comments that have been deleted. Additionally,
                                administrators can restore previously deleted comments and threads. They also have access to all the management
                                options for any thread on the site, and can broswe and manage deleted or archived threads.
                            </p>
                        </td>
                    </tr>
                </tbody></table>
                <p className='paragraph'>
                    All of the site data is stored in a MySQL database, and is accessed using a NodeJS API with session-based user
                    authentication. Upon logging in, users are assigned a unique session ID, which is stored by the browser. Each
                    time a user likes, posts, deletes, or views any comment or space, their information is verified by the API
                    to ensure that they have access before the data is sent over the internet.
                </p>
            </div>
        </div>
    );
}