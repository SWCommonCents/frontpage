require 'sinatra'

set :erb, :format => :html5

get '/' do
  erb :index, locals: { template: :'front/index.html', title: 'Learn to Earn' }
end
