
/**
 * Generated using theia-plugin-generator
 */

import * as theia from '@theia/plugin';
import 'roboto-fontface/css/roboto/roboto-fontface.css';

export function start(context: theia.PluginContext) {
    console.log(theia.window.state);
    document.documentElement.style.setProperty("--theia-ui-font-size1", "14px");
    document.documentElement.style.setProperty("--theia-brand-color0", "#1776BF");
    document.documentElement.style.setProperty("--theia-ui-font-family", "'Roboto', Courier, Sans-serif");
    document.documentElement.style.setProperty("--theia-ui-font-color0", "#333333");
    document.documentElement.style.setProperty("--theia-ui-font-color1", "#333333");
}

export function stop() {

}
