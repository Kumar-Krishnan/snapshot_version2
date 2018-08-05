json.tests (@tests) do |testx|
    json.(testx, :id, :created_at, :name)
    json.questions testx.questions do |question|
        json.(question, :id, :question_text,)
        json.answers question.answers do |answer|
            json.answer answer
        end
    end
end