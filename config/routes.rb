Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  namespace :api do
    # get '/entire_test/:test_name/',to:'tests#get_entire_test'
    get '/users/:user_id/snaps/:snap_id/tests/all', to:'tests#get_whole_tests', defaults: {format: :json}
    get '/users/:user_id/snaps/all', to: 'snaps#get_snaps_and_tests', defaults: {format: :json}
    get '/snaps/:snap_id/test_scores/all', to: 'test_scores#get_all_test_scores_for_snap'
    get '/snaps/:snap_id/moods/:mood_id/test_scores', to: 'test_scores#get_by_snap_and_mood'
    post '/snaps/:snap_id/moods/:mood_id/:test_score', to: 'test_scores#save_user_submitted_score'
    get '/users/:user_id/moods/:mood_id/test_scores', to: 'test_scores#get_all_test_scores_for_user' 
    resources :users do
      resources :snaps
      resources :test_scores
    end

    resources :snaps do
      resources :test_scores
    end

    resources :moods
  end
end
