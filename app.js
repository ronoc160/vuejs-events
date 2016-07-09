new Vue({
    //  targeting the div with an id of 'events'

    el: '#events',

    data: {
        event: {
            name: '',
            description: '',
            date: ''
        },
        events: []
    },

    // Anything within the ready function will run when the application loads
    ready: function() {
        // When the application loads, we want to call the method that initializes
        // some data
        this.fetchEvents();
    },

    // Methods we want to use in our application are registered here
    methods: {

        // We dedicate a method to retrieving and setting some data
        fetchEvents: function() {
            var events = [{
                id: 1,
                name: 'Learn Express',
                description: 'Express is some kind of powerful magic',
                date: '2016-09-14'
            }, {
                id: 2,
                name: 'Pick up Cat litter',
                description: 'Some grounded dust to make my cats WC area less smelly.',
                date: '2016-09-16'
            }, {
                id: 3,
                name: 'Play more with Vue...Its pretty',
                description: 'Title says it all',
                date: '2016-10-10'
            }];
            // $set is a convenience method provided by Vue that is similar to pushing
            // data onto an array
            this.$set('events', events);
        },

        // Adds an event to the existing events array
        addEvent: function() {
            if (this.event.name) {
                this.events.push(this.event);
                this.event = {
                    name: '',
                    description: '',
                    date: ''
                };
            }
        },

        //delete
        deleteEvent: function(index) {
            if(confirm("are you mother fuckin sure?")){
                // $remove is a Vue convenience method similar to splice
                this.events.splice(index,1);
            }
        }
    }
});
