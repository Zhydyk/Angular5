import msg from './contents';
import * as $ from 'jquery';

import './message.scss';

class HelloComponent{

}

$( () => {
    $("<div id='message'>")
    .text(msg+"!")
    .appendTo("body");
});



