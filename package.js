Package.describe({
  name: '96koushikroy:drunken-parrots-ui-kit-lite',
  version: '1.0.1',
  // Brief, one-line summary of the package.
  summary: 'Drunken Parrot Flat UI Kit Lite for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/96koushikroy/meteor-drunken-parrots-ui-kit-lite.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {

api.versionsFrom('1.0.3.2');
  api.use('jquery', 'client','natestrauser:font-awesome');

api.addFiles(['lib/bootstrap/css/bootstrap.css'
              , 'lib/bootstrap/css/prettify.css'
     
              ,'lib/bootstrap/js/bootstrap.min.js'
              ,'lib/bootstrap/js/prettify.js'
     
    
              ,'lib/css/demo.css'
              ,'lib/css/docs.css'
              ,'lib/css/drunken-parrot.css'
              ,'lib/css/font-awesome.min.css'
     
    
              ,'lib/js/application.js'
              ,'lib/js/checkbox.js'
              ,'lib/js/bootstrap-switch.js'   
              ,'lib/js/html5shiv.js'
              ,'lib/js/radio.js'
              ,'lib/js/switch.js'
              ,'lib/js/toolbar.js'
              
              ,'lib/fonts/source-sans-pro/sourcesanspro-bold.eot'
              ,'lib/fonts/source-sans-pro/sourcesanspro-bold.woff'
              ,'lib/fonts/source-sans-pro/sourcesanspro-bold.ttf'
              ,'lib/fonts/source-sans-pro/sourcesanspro-bold.svg'
              ,'lib/fonts/source-sans-pro/sourcesanspro-regular.eot'
              ,'lib/fonts/source-sans-pro/sourcesanspro-regular.woff'
              ,'lib/fonts/source-sans-pro/sourcesanspro-regular.ttf'
              ,'lib/fonts/source-sans-pro/sourcesanspro-regular.svg'
              ,'lib/fonts/source-sans-pro/sourcesanspro-extralight.eot'
              ,'lib/fonts/source-sans-pro/sourcesanspro-extralight.woff'
              ,'lib/fonts/source-sans-pro/sourcesanspro-extralight.ttf'
              ,'lib/fonts/source-sans-pro/sourcesanspro-extralight.svg'
              ,'lib/fonts/source-sans-pro/sourcesanspro-semibold.eot'
              ,'lib/fonts/source-sans-pro/sourcesanspro-semibold.woff'
              ,'lib/fonts/source-sans-pro/sourcesanspro-semibold.ttf'
              ,'lib/fonts/source-sans-pro/sourcesanspro-semibold.svg'
                  ],'client');

});
