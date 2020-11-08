<template>
    <div>
        <p>
            Here is the demo of vue-fullcalendar, no jquery fullcalendar.js required!
        </p>
        <full-calendar class="test-fc" :events="fcEvents"
                       lang="en"></full-calendar>
    </div>
</template>
<script>
  let demoEvents = [
    {
      title: 'Sunny 728-730',
      start: '2020-07-25',
      end: '2020-07-27'
    },
    {
      title: 'Sunny 726-727',
      start: '2020-11-11',
      end: '2020-11-12',
      classEvent: 'xxx'
    },
    {
      title: 'Sunny 727-728',
      start: '2020-11-11',
      end: '2020-11-12'
    },
    {
      title: 'Sunny 727-12213',
      start: '2020-11-11',
      end: '2020-11-12'
    },
    {
      title: 'Sunny 727-22222',
      start: '2020-11-11',
      end: '2020-11-12'
    },
    {
      title: 'Sunny 727-728',
      start: '2020-11-11',
      end: '2020-11-12'
    },
    {
      title: 'Sunny 728-730',
      start: '2020-11-11',
      end: '2020-11-12'
    },
  ]

  export default {
    data() {
      return {
        name: 'Sunny!',
        fcEvents: demoEvents
      }
    },
    events: {
      'changeMonth'(start, end, current) {
        console.log('changeMonth', start, end, current)
      }
    },
    components: {
      'full-calendar': require('src/fullCalendar')
    }
  }
</script>
<style lang='scss'>
    .app {
        color: green;
    }
</style>