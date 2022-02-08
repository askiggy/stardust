import React from 'react';
import Branding from './components/Branding';
import Profile from './components/Profile';

const code = `<script>
  (function(){
    alert('hello world');
  })();
</script>`;

function App() {
  return (
    <div className='App container'>
      <h1>Stardust</h1>

      <div className='module'>
        <h2>Branding</h2>
        <div className='component'>
          <Branding />
        </div>
      </div>

      <div className='module'>
        <h2>Profile</h2>
        <div className='component'>
          <Profile
            user={{
              name: 'Ben de Jesus',
              picture: 'http://placekitten.com/200/200'
            }}
          />
        </div>
      </div>

      <div className='module typography'>
        <h2>Typography</h2>

        <div className='grid'>
          <div className='component'>
            <h3 className='text-element'>h1</h3>
            <h1>
              Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.
            </h1>
          </div>

          <div className='element component'>
            <h3 className='text-element'>h2</h3>
            <h2>
              Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.
            </h2>
          </div>

          <div className='element component'>
            <h3 className='text-element'>h3</h3>
            <h3>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h3>
          </div>

          <div className='element component'>
            <h3 className='text-element'>h4</h3>
            <h4>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h4>
          </div>

          <div className='element component'>
            <h3 className='text-element'>h5</h3>
            <h5>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h5>
          </div>

          <div className='element component'>
            <h3 className='text-element'>h6</h3>
            <h6>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h6>
          </div>

          <div className='element component'>
            <h3 className='text-element'>p</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</p>
          </div>

          <div className='component'>
            <h3 className='text-element'>code</h3>
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>

      <div className='module buttons'>
        <h2>Buttons</h2>
        <div className='grid'>
          <div className='component'>
            <h3 className='text-element'>default</h3>
            <button type='button' className='button'>Default</button>
          </div>

          <div className='component'>
            <h3 className='text-element'>.btn-alt</h3>
            <button type='button' className='button btn-alt'>Alternate</button>
          </div>

          <div className='component'>
            <h3 className='text-element'>.btn-primary</h3>
            <button type='button' className='button btn-primary'>Primary</button>
          </div>

          <div className='component'>
            <h3 className='text-element'>.btn-primary.btn-outline</h3>
            <button type='button' className='button btn-primary btn-outline'>Primary Outline</button>
          </div>

          <div className='component'>
            <h3 className='text-element'>.btn-danger</h3>
            <button type='button' className='button btn-danger'>Danger</button>
          </div>

          <br />

          <div className='component tint-light'>
            <h3 className='text-element'>.btn-outline</h3>
            <button type='button' className='button btn-outline'>Outline</button>
          </div>

          <div className='component tint-dark'>
            <h3 className='text-element'>.btn-white</h3>
            <button type='button' className='button btn-white'>White</button>
          </div>

          <div className='component tint-dark'>
            <h3 className='text-element'>.btn-white.btn-outline</h3>
            <button type='button' className='button btn-white btn-outline'>White Outline</button>
          </div>
        </div>
      </div>

      <div className='module system'>
        <h2>System Message</h2>
        <div className='component'>
          <h3 className='text-element'>.system-message</h3>
          <div className='system-message'>
            <b>Default</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
        <div className='component'>
          <h3 className='text-element'>.info.system-message</h3>
          <div className='info system-message'>
            <b>Info</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
        <div className='component'>
          <h3 className='text-element'>.success.system-message</h3>
          <div className='success system-message'>
            <b>Success</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
        <div className='component'>
          <h3 className='text-element'>.warning.system-message</h3>
          <div className='warning system-message'>
            <b>Warning</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
        <div className='component'>
          <h3 className='text-element'>.error.system-message</h3>
          <div className='error system-message'>
            <b>Error</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
        <div className='component'>
          <h3 className='text-element'>.text-success.system-message</h3>
          <div className='text-success system-message'>
            <b>Success text</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
        <div className='component'>
          <h3 className='text-element'>.text-warning.system-message</h3>
          <div className='text-warning system-message'>
            <b>Warning text</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
        <div className='component'>
          <h3 className='text-element'>.text-error.system-message</h3>
          <div className='text-error system-message'>
            <b>Error text</b> – <a href='/'>Etiam porta</a> sem malesuada magna mollis euismod.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
