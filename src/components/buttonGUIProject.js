import buttons from '../image/buttons.png';

export default function ButtonGUIProject() {
    return (
        <div className='page'>
            <div className='row'>
                <div className='column'>
                    <h1>Button GUI Project</h1>
                </div>
                <div className='column'>
                    <a href='https://github.com/Dylang140/ComputerCraftButtonGUI' target="_blank" className='blobLink'>
                        <div className='blob' style={{ width: '100%', textAlign: 'center'}}>
                            View on GitHub
                        </div>
                    </a>
                </div>
            </div>
            <div className='row'>
                <table><tbody>
                    <tr>
                        <td>
                            <p className='paragraph'>
                                This quick project was to create a customizable user interface for controlling redstone outputs and to monitor power levels. It is intended for use with the CC: Tweaked and Immersive Engineering Minecraft mods 
                                (I am not affiliated with either of those projects). The Lua script can be downloaded, and new entries into the arrays can be added, following the commented guidelines. Buttons can be created and assigned a redstone output, 
                                redstone inputs can be assigned to an indicator, and bar graphs can be assigned to one or more capacitors (the energy storage block for Immersive Engineering). 
                            </p>
                            <p className='paragraph'>
                                The image is only an example, all components can be moved or sized to however you like, within the limits of the in-game monitor (the coordinates are based of characters, so the resolution is less than 100 in the y-direction for the
                                monitor in the example).
                            </p>
                            <p className='paragraph'>
                                Current Line Indicators can be specified with screen coordinates and
                                a current transformer input (an Immersive Engineering device that can monitor power flow across a wire) to create diagrams on-screen. The example image shows power flowing from one of three generator indicators on the left, into the
                                capacitor bank (represented by the bar graph) and then to the various loads on the right. This provides a quick view of where power is flowing throughout your network, and the status of any configured machines, generators, 
                                or capacitors.
                            </p>
                            <p className='paragraph'>
                                Alarms can be set to trigger when a given capacitor drops below a specified threshold. A red, flashing indicator appears in the top right corner, and a noteblock attached to the correct redstone output will beep begin to sound.
                                The alarm stops when then monitored value returns to above the threshold.
                            </p>
                            <p className='paragraph'>
                                The refresh rate of the program can be changed, as anything under 2-seconds may cause game lag.
                            </p>
                        </td>
                        <td>
                            <img src={buttons} style={{height: '500px'}}/>
                        </td>
                    </tr>
                </tbody></table>
                
            </div>
        </div>
    );
}