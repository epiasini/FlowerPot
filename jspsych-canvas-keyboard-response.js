jsPsych.plugins["canvas-keyboard-response"] = (function() {

  var plugin = {};

  jsPsych.pluginAPI.registerPreload('canvas-keyboard-response', 'stimulus', 'image');

  plugin.info = {
    name: 'canvas-keyboard-response',
    description: '',
    parameters: {
      stimulus: {
        type: jsPsych.plugins.parameterType.HTML_STRING,
        pretty_name: 'Stimulus',
        default: undefined,
        description: 'The image to be displayed'
      },
      stimulus_height: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image height',
        default: null,
        description: 'Set the image height in pixels'
      },
      stimulus_width: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Image width',
        default: null,
        description: 'Set the image width in pixels'
      },
      maintain_aspect_ratio: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Maintain aspect ratio',
        default: true,
        description: 'Maintain the aspect ratio after setting width or height'
      },
      choices: {
        type: jsPsych.plugins.parameterType.KEYCODE,
        array: true,
        pretty_name: 'Choices',
        default: jsPsych.ALL_KEYS,
        description: 'The keys the subject is allowed to press to respond to the stimulus.'
      },
      prompt: {
        type: jsPsych.plugins.parameterType.STRING,
        pretty_name: 'Prompt',
        default: null,
        description: 'Any content here will be displayed below the stimulus.'
      },
      stimulus_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Stimulus duration',
        default: null,
        description: 'How long to hide the stimulus.'
      },
      trial_duration: {
        type: jsPsych.plugins.parameterType.INT,
        pretty_name: 'Trial duration',
        default: null,
        description: 'How long to show trial before it ends.'
      },
      response_ends_trial: {
        type: jsPsych.plugins.parameterType.BOOL,
        pretty_name: 'Response ends trial',
        default: true,
        description: 'If true, trial will end when subject makes a response.'
      },
    }
  }

  plugin.trial = function(display_element, trial) {

    // display stimulus
    var html = '<canvas id="jspsych-canvas-keyboard-response-stimulus" width="800" height="800" style="border:1px solid;">' + trial.stimulus + '</canvas>';

    // add prompt
    if (trial.prompt !== null){
      html += trial.prompt;
    }

    // render
    display_element.innerHTML = html;

      
      
      
    // store response
    var response = {
      rt: null,
      key: null
    };
      
var ctx = document.getElementById('jspsych-canvas-keyboard-response-stimulus')
var canvas = new fabric.Canvas('jspsych-canvas-keyboard-response-stimulus');    
      
// THIS IS WHERE THE LINES ARE DRAW- XSTART,YSTART,XEND,YEND
base_top = new fabric.Line([350,350,450,350],{
    strokeWidth: 5,
    fill: 'red',
    stroke: 'red',
  });

horizontal_top = new fabric.Line([250,350,550,350],{
    strokeWidth: 5,
    fill: 'red',
    stroke: 'red',
  });


vertical_top = new fabric.Line([400,250,400,350],{
    strokeWidth: 5,
    fill: 'red',
    stroke: 'red',
  });

    
point_top = new fabric.Circle({
        radius: 4,
        fill: 'red',
        left: 400,
        top: 350,
        });
 var line_top = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke: 'red', objectCaching: false, strokeWidth: 5 });

    line_top.path[0][1] = 150;
    line_top.path[0][2] = 100;

    line_top.path[1][1] = 200;
    line_top.path[1][2] = 400;

    line_top.path[1][3] = 250;
    line_top.path[1][4] = 100;

    line_top.selectable = false;
 
    
base_bottom = new fabric.Line([350,450,450,450],{
    strokeWidth: 5,
    fill: 'red',
    stroke: 'red',
  });

    
horizontal_bottom = new fabric.Line([250,450,550,450],{
    strokeWidth: 5,
    fill: 'red',
    stroke: 'red',
  });
    
vertical_bottom = new fabric.Line([400,450,400,550],{
    strokeWidth: 5,
    fill: 'red',
    stroke: 'red',
  });
    
point_bottom = new fabric.Circle({
        radius: 4,
        fill: 'red',
        left: 400,
        top: 450,
        });
      
 var line_bottom = new fabric.Path('M 65 0 Q 100, 100, 200, 0', { fill: '', stroke: 'red', objectCaching: false, strokeWidth: 5 });

    line_bottom.path[0][1] = 150;
    line_bottom.path[0][2] = 100;

    line_bottom.path[1][1] = 200;
    line_bottom.path[1][2] = 400;

    line_bottom.path[1][3] = 250;
    line_bottom.path[1][4] = 100;

    line_bottom.selectable = false;

  switch(orientation){
          case 0:
    canvas.add(base_top)   
   canvas.add(horizontal_bottom) 
          break;
          
      case 1:
    canvas.add(base_bottom) 
      canvas.add(horizontal_top)
     break;    
          
        case 2:
    canvas.add(base_top)   
   canvas.add(vertical_bottom) 
          break;
          
      case 3:
    canvas.add(base_bottom) 
      canvas.add(vertical_top)
     break;  
          
    case 4:
    canvas.add(base_top)   
   canvas.add(point_bottom) 
          break;
          
      case 5:
    canvas.add(base_bottom) 
      canvas.add(point_top)
     break;  
      
    case 6:
    canvas.add(base_top)   
   canvas.add(line_bottom) 
          break;
          
      case 7:
    canvas.add(base_bottom) 
      canvas.add(line_top)
     break;  
  }
      

var rw = trial.stimulus

        var ball_1 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left:  XYActual.data[rw][0],
        top: XYActual.data[rw][1],
        });
    
        var ball_2 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][2],
        top: XYActual.data[rw][3],
        });
        
        var ball_3 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][4],
        top: XYActual.data[rw][5],
        });
        
        var ball_4 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][6],
        top: XYActual.data[rw][7],
        });
		
        var ball_5 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][8],
        top: XYActual.data[rw][9],
        });
		
        var ball_6 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][10],
        top: XYActual.data[rw][11],
        });
		
        var ball_7 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][12],
        top: XYActual.data[rw][13],
        });
		
        var ball_8 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][14],
        top: XYActual.data[rw][15],
        });
		
        var ball_9 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][16],
        top: XYActual.data[rw][17],
        });
		
        var ball_10 = new fabric.Circle({
        radius: 2,
        fill: 'black',
        left: XYActual.data[rw][18],
        top: XYActual.data[rw][19],
        });

    canvas.add(ball_1, ball_2, ball_3, ball_4, ball_5, ball_6, ball_7, ball_8, ball_9, ball_10)   

      
      /* canvas.add(base_top)   
   canvas.add(horizontal_top) 
       canvas.add(vertical_top) 
      canvas.add(point_top)
      
       canvas.add(base_bottom) 
      canvas.add(horizontal_bottom)
 canvas.add(vertical_bottom) 
canvas.add(point_bottom);
*/
    
    // function to end trial when it is time
    var end_trial = function() {

      // kill any remaining setTimeout handlers
      jsPsych.pluginAPI.clearAllTimeouts();

      // kill keyboard listeners
      if (typeof keyboardListener !== 'undefined') {
        jsPsych.pluginAPI.cancelKeyboardResponse(keyboardListener);
      }

      // gather the data to store for the trial
      var trial_data = {
        "rt": response.rt,
        "stimulus": trial.stimulus,
        "key_press": response.key,
      };

      // clear the display
      display_element.innerHTML = '';

      // move on to the next trial
      jsPsych.finishTrial(trial_data);
    };

    // function to handle responses by the subject
    var after_response = function(info) {

      // after a valid response, the stimulus will have the CSS class 'responded'
      // which can be used to provide visual feedback that a response was recorded
      display_element.querySelector('#jspsych-canvas-keyboard-response-stimulus').className += ' responded';

      // only record the first response
      if (response.key == null) {
        response = info;
      }

      if (trial.response_ends_trial) {
        end_trial();
      }
    };

    // start the response listener
    if (trial.choices != jsPsych.NO_KEYS) {
      var keyboardListener = jsPsych.pluginAPI.getKeyboardResponse({
        callback_function: after_response,
        valid_responses: trial.choices,
        rt_method: 'performance',
        persist: false,
        allow_held_key: false
      });
    }

    // hide stimulus if stimulus_duration is set
    if (trial.stimulus_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        display_element.querySelector('#jspsych-canvas-keyboard-response-stimulus').style.visibility = 'hidden';
      }, trial.stimulus_duration);
    }

    // end trial if trial_duration is set
    if (trial.trial_duration !== null) {
      jsPsych.pluginAPI.setTimeout(function() {
        end_trial();
      }, trial.trial_duration);
    }

  };

  return plugin;
})();
