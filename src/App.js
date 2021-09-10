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

      <div className='section'>
        <h2>Branding</h2>
        <div className='component'>
          <Branding />
        </div>
      </div>

      <div className='section'>
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

      <div className='section typography'>
        <h2>Typography</h2>

        <div className='grid'>
          <div className='component'>
            <h3>h1</h3>
            <h1>
              Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.
            </h1>
          </div>

          <div className='component'>
            <h3>h2</h3>
            <h2>
              Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.
            </h2>
          </div>

          <div className='component'>
            <h3>h3</h3>
            <h3>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h3>
          </div>

          <div className='component'>
            <h3>h4</h3>
            <h4>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h4>
          </div>

          <div className='component'>
            <h3>h5</h3>
            <h5>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h5>
          </div>

          <div className='component'>
            <h3>h6</h3>
            <h6>Lorem ipsum dolor sit amet curabitur blandit tempus porttitor.</h6>
          </div>

          <div className='component'>
            <h3>p</h3>
            <p>Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.</p>
          </div>

          <div className='component'>
            <h3>code</h3>
            <pre>
              <code>{code}</code>
            </pre>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
