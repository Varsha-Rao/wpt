function createScroller(test) {
  var scroller = createDiv(test);
  scroller.innerHTML = "<div class='contents'></div>";
  scroller.classList.add('scroller');
  // Trigger layout run.
  scroller.scrollTop;
  return scroller;
}

function createScrollerWithStartAndEnd(test, orientationClass = 'vertical') {
  var scroller = createDiv(test);
  scroller.innerHTML =
    `<div class='contents'>
        <div id='start'></div>
        <div id='end'></div>
      </div>`;
  scroller.classList.add('scroller');
  scroller.classList.add(orientationClass);

  return scroller;
}

function createScrollTimeline(test, options) {
  options = options || {
    scrollSource: createScroller(test),
    timeRange: 1000
  }
  return new ScrollTimeline(options);
}

function createScrollTimelineWithOffsets(test, startOffset, endOffset) {
  return createScrollTimeline(test, {
    scrollSource: createScroller(test),
    orientation: "vertical",
    startScrollOffset: startOffset,
    endScrollOffset: endOffset,
    timeRange: 1000
  });
}

function createScrollLinkedAnimation(test, timeline) {
  if (timeline === undefined)
    timeline = createScrollTimeline(test);
  const DURATION = 1000; // ms
  const KEYFRAMES = { opacity: [0, 1] };
  return new Animation(
    new KeyframeEffect(createDiv(test), KEYFRAMES, DURATION), timeline);
}

