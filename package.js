Package.describe({
  summary: "jQuery image cycle plugin."
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files('lib/js/jquery.cycle.all.js', ['client']);
});
