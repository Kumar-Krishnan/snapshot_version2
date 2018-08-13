Rails.application.routes.draw do
  namespace :api do
    get 'tests/index'
    get 'tests/show'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  
  namespace :api do
    # get '/entire_test/:test_name/',to:'tests#get_entire_test'
    get '/snaps/:snap_id/questions/:question_id/answer_chosen', to: 'answers#chosen_answer_for_snap'
    get '/snaps/:snap_id/:test_id/testscore', to: 'test_scores#snap_test_score'
    post '/snaps/:snap_id/answers/:answer_id', to: 'answers#submit_answer_for_snap'
    get '/tests/:test_id/total_questions', to: 'tests#total_questions'
    post '/users/:user_id/snaps/:snap_id/tests/:test_id/test_score/:test_score_total', to: 'test_scores#post_new_score'
    get '/users/:user_id/tests/:test_id/scores', to: 'test_scores#get_all_scores_for_specific_test_for_user'
    resources :users do
      resources :snaps
    end

    resources :snaps do
      resources :tests
      resources :test_scores
    end

    resources :tests do
      resources :questions
    end

    resources :questions do
      resources :answers
    end
  end
end
