require 'sprockets'

Encoding.default_external = 'UTF-8'

map '/assets' do
  environment = Sprockets::Environment.new
  environment.append_path '.'
  run environment
end