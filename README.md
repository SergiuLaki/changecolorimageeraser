# Change Color Image Eraser (sergiulaki)
(Script made by **sergiulaki**, based on jQuery plugin made by [boblemarin](https://github.com/boblemarin/jQuery.eraser) )
# Change your brand image color by erasing it. Demo:
https://sergiulaki.github.io/changecolorimageeraser/

# Usage
1. To use it you need to include jquery, jQuery eraser plugin and Change Color Image Eraser script

```
  <!-- Include jQuery -->
  <script src="./assets/jQuery.js"></script>

  <!-- Include jQuery.eraser -->
  <script src="./assets/jquery.eraser.js"></script>

  <!-- Change color image eraser -->
  <script src="./js/changeColorImageEraser.js"></script>
```
2. Basic HTML structure (the script is based on data-count attribute and classes (image, colorPicker__item ) so they are **required**)
```
  <!-- Images -->
  <div class="images">
      <!-- Images set (needs to be the same sizes) -->
      <img src="./img/aqua.png" class="image image--aqua" data-count="1">
      <img src="./img/roze.png" class="image image--roze" data-count="2">
      <img src="./img/white.png" class="image image--white" data-count="3">

      <!-- Color pickers -->
      <div class="colorPicker">
          <div class="colorPicker__item colorPicker__item--aqua" data-count="1"></div>
          <div class="colorPicker__item active colorPicker__item--roze" data-count="2"></div>
      </div>

      <!-- Reset eraser -->
      <button class="resetEraser">Reset Eraser</button>
  </div>
```

Created by @sergiulaki
