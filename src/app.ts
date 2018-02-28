import msg from './contents';
import * as $ from 'jquery';

import './message.scss';


$( () => {
    $("<div id='message'>")
    .text(msg+"!")
    .appendTo("body");
});