+++
title = "About me"
slug = "about"
+++
¡Hi! I'm **El Muso**, but of course, that's not my real name.
I'm a musician, writer and researcher in my free time, right now I'm still studying music, but at the same time I give some time to make content intermittently

Asides that, I'm a content creator that sometimes is a little impulsive and that is the reason of my adventure in social networks, showing that music theory doesn't need to be hard.

Right now I'm established on YouTube, I hope that this content will be useful for you 


## Contact me for:

{{< rawhtml >}}
<style>
.tabs {
  display: flex;
  flex-wrap: wrap;
  max-width: 700px;
}
.input {
  position: absolute;
  opacity: 0;
}
.label {
  width: 100%;
  padding: 20px;
opacity: 50%;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  transition: background 0.1s, color 0.1s;
}
.label:hover {
  background: #555;
}
.label:active {
  background: #ccc;
}
.input:focus + .label {
  z-index: 1;
}
.input:checked + .label {
  opacity: 100%;
}
@media (min-width: 600px) {
  .label {
    width: auto;
  }
}
.panel {
  display: none;
  padding: 20px;
}
.panel p{
  margin: 0px;
}

@media (min-width: 600px) {
  .panel {
    order: 99;
  }
}
.input:checked + .label + .panel {
  display: block;
}

</style>
<div class="tabs">
  <input class="input" name="tabs" type="radio" id="tab-1" checked="checked"/>
  <label class="label tcol" for="tab-1">Colaboration/Typos</label>
  <div class="panel tcol">
    <p>If you find an error that needs to be fixed, or you want to translate the content to English, please contact me.</p>
    
  </div>
  <input class="input" name="tabs" type="radio" id="tab-2"/>
  <label class="label tcol" for="tab-2">Rants</label>
  <div class="panel tcol">
    <p>If you believe that some material here breaks your copyright rights, contact me (with proof) so that I may remove it or adapt it.</p>
  </div>
  <input class="input" name="tabs" type="radio" id="tab-3"/>
  <label class="label tcol" for="tab-3">Complains</label>
  <div class="panel tcol">
    <p>If someone that you know breaks the copyright of the content (CC 4.4 N.C Atrribution), then you should tell me</p>
  </div>
</div>
{{< /rawhtml >}}

contact me here:
### elmusoyt@gmail.com
or fill this https://forms.gle/A9PNTihtXcJqojDK7