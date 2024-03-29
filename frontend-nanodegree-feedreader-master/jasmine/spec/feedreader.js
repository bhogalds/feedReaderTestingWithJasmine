/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

/* The $() function contains all the test suites and specs.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('allFeeds variable defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('url is deinfed', function() {
            for (let feed of allFeeds) { // loop thru the allFeeds object 
                expect(feed.url).toBeDefined(); // ensure url is defined
                expect(feed.url.length).not.toBe(0); // and it is not empty
            }
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('name is deinfed', function() {
            for (let feed of allFeeds) {
                expect(feed.name).toBeDefined(); // same as above test for name is defined 
                expect(feed.name.length).not.toBe(0); // and not empty
            }
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
         it('menu is hidden', function() {
            const body = document.querySelector('body'); // get DOM body
            expect(body.classList.contains('menu-hidden')).toBe(true); // test for menu-hidden true
         })

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu toggles on and off', function() {
            const body = document.querySelector('body');
            const menu = document.querySelector('.menu-icon-link');
            menu.click(); // click unhides the class 
            expect(body.classList.contains('menu-hidden')).toBe(false);
            menu.click(); // click and test for toggle
            expect(body.classList.contains('menu-hidden')).toBe(true);
         })
    }); 
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    describe('Initial Entries', function(){
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('loadFeed() completes work', function(){
            const feed = document.querySelector('.feed');
            const entries = feed.querySelectorAll('article.entry');
            expect(entries.length > 0).toBe(true);
        });
    });
    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

    describe('New Feed Selection', function(){
        let feedOne, feedTwo; 
        beforeEach(function(done){
            loadFeed(1, function (){ 
                feedOne = document.querySelector('div.feed').innerHTML;
                loadFeed(2, function(){
                    feedTwo = document.querySelector('div.feed').innerHTML;
                    done();
                });
            });
        });

        it('loads different new  feed', function(){
            expect(feedOne).not.toBe(feedTwo);
         });   

    });     
    
}());
