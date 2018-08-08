TestScore.destroy_all
User.destroy_all
Snap.destroy_all
Test.destroy_all
Question.destroy_all
Answer.destroy_all



beck_dep_inventory = Test.new
beck_dep_inventory.name = "Beck Depression Inventory"
beck_dep_inventory.save

beck_question_1 = Question.new
beck_question_1.question_text = "1"
beck_question_1.test_id = beck_dep_inventory.id
beck_question_1.save

beck_question_1.answers.create(answer_text: "I do not feel sad.", answer_value: 0)
beck_question_1.answers.create(answer_text: "I feel sad.", answer_value: 1)
beck_question_1.answers.create(answer_text: "I am sad all the time and I can't snap out of it.", answer_value: 2)
beck_question_1.answers.create(answer_text: "I am so sad and unhappy that I can't stand it.", answer_value: 3)

beck_question_2 = Question.new
beck_question_2.question_text = "2"
beck_question_2.test_id = beck_dep_inventory.id
beck_question_2.save

beck_question_2.answers.create(answer_text: "I am not particularly discouraged about the future. ", answer_value: 0)
beck_question_2.answers.create(answer_text: "I feel discouraged about the future. ", answer_value: 1)
beck_question_2.answers.create(answer_text: "I feel I have nothing to look forward to.", answer_value: 2)
beck_question_2.answers.create(answer_text: "I feel the future is hopeless and that things cannot improve.", answer_value: 3)

beck_question_3 = Question.new
beck_question_3.question_text = "3"
beck_question_3.test_id = beck_dep_inventory.id
beck_question_3.save

beck_question_3.answers.create(answer_text: "I do not feel like a failure. ", answer_value: 0)
beck_question_3.answers.create(answer_text: "I feel I have failed more than the average person.", answer_value: 1)
beck_question_3.answers.create(answer_text: "As I look back on my life, all I can see is a lot of failures.", answer_value: 2)
beck_question_3.answers.create(answer_text: "I feel I am a complete failure as a person.", answer_value: 3)

beck_question_4 = Question.new
beck_question_4.question_text = "4"
beck_question_4.test_id = beck_dep_inventory.id
beck_question_4.save

beck_question_4.answers.create(answer_text: "I get as much satisfaction out of things as I used to.", answer_value: 0)
beck_question_4.answers.create(answer_text: "I don't enjoy things the way I used to. ", answer_value: 1)
beck_question_4.answers.create(answer_text: "I don't get real satisfaction out of anything anymore. ", answer_value: 2)
beck_question_4.answers.create(answer_text: "I am dissatisfied or bored with everything.", answer_value: 3)

beck_question_5 = Question.new
beck_question_5.question_text = "5"
beck_question_5.test_id = beck_dep_inventory.id
beck_question_5.save

beck_question_5.answers.create(answer_text: "I don't feel particularly guilty", answer_value: 0)
beck_question_5.answers.create(answer_text: "I feel guilty a good part of the time. ", answer_value: 1)
beck_question_5.answers.create(answer_text: "I feel quite guilty most of the time.", answer_value: 2)
beck_question_5.answers.create(answer_text: "I feel guilty all of the time. ", answer_value: 3)

social_interaction_anxiety = Test.new
social_interaction_anxiety.name = "Social Interaction Anxiety Scale"
social_interaction_anxiety.save

social_interaction_anxiety_question_1 = Question.new
social_interaction_anxiety_question_1.question_text = "I get nervous if I have to speak with someone in authority (teacher, boss)."
social_interaction_anxiety_question_1.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_1.save

social_interaction_anxiety_question_1.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_1.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_1.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_1.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_1.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_2 = Question.new
social_interaction_anxiety_question_2.question_text = "I have difficulty making eye contact with others."
social_interaction_anxiety_question_2.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_2.save

social_interaction_anxiety_question_2.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_2.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_2.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_2.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_2.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_3 = Question.new
social_interaction_anxiety_question_3.question_text = "I become tense if I have to talk about myself or my feelings."
social_interaction_anxiety_question_3.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_3.save

social_interaction_anxiety_question_3.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_3.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_3.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_3.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_3.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_4 = Question.new
social_interaction_anxiety_question_4.question_text = "I find it difficult to mix comfortably with the people I work with."
social_interaction_anxiety_question_4.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_4.save

social_interaction_anxiety_question_4.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_4.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_4.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_4.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_4.answers.create(answer_text: "EXTREMELY", answer_value: 4)


social_interaction_anxiety_question_5 = Question.new
social_interaction_anxiety_question_5.question_text = "I find it easy to make friends my own age."
social_interaction_anxiety_question_5.test_id = social_interaction_anxiety.id
social_interaction_anxiety_question_5.save

social_interaction_anxiety_question_5.answers.create(answer_text: "NOT AT ALL", answer_value: 0)
social_interaction_anxiety_question_5.answers.create(answer_text: "SLIGHTLY", answer_value: 1)
social_interaction_anxiety_question_5.answers.create(answer_text: "MODERATELY", answer_value: 2)
social_interaction_anxiety_question_5.answers.create(answer_text: "VERY", answer_value: 3)
social_interaction_anxiety_question_5.answers.create(answer_text: "EXTREMELY", answer_value: 4)


dostoevsky = User.new
dostoevsky.name = "Fyodor Dostoevsky"
dostoevsky.age = 45
dostoevsky.save

dostoevsky1 = Snap.new
dostoevsky1.user_id = dostoevsky.id

first_first_beck_answer = Answer.where(question_id: beck_question_1.id, answer_value: 3)
first_second_beck_answer = Answer.where(question_id: beck_question_2.id, answer_value: 3)
first_third_beck_answer = Answer.where(question_id: beck_question_3.id, answer_value: 3)
first_fourth_beck_answer = Answer.where(question_id: beck_question_4.id, answer_value: 3)
first_fifth_beck_answer = Answer.where(question_id: beck_question_5.id, answer_value: 3)

dostoevsky1.answers << first_first_beck_answer
dostoevsky1.answers << first_second_beck_answer
dostoevsky1.answers << first_third_beck_answer
dostoevsky1.answers << first_fourth_beck_answer
dostoevsky1.answers << first_fifth_beck_answer
dostoevsky1.save

test_score_1 = TestScore.new
test_score_1.score_total = 15
test_score_1.user_id = dostoevsky.id
test_score_1.snap_id = dostoevsky1.id
test_score_1.test_id = beck_dep_inventory.id
test_score_1.save

dostoevsky2 = Snap.new
dostoevsky2.user_id = dostoevsky.id

second_first_beck_answer = Answer.where(question_id: beck_question_1.id, answer_value: 1)
second_second_beck_answer = Answer.where(question_id: beck_question_2.id, answer_value: 1)
second_third_beck_answer = Answer.where(question_id: beck_question_3.id, answer_value: 1)
second_fourth_beck_answer = Answer.where(question_id: beck_question_4.id, answer_value: 1)

dostoevsky2.answers << second_first_beck_answer
dostoevsky2.answers << second_second_beck_answer
dostoevsky2.answers << second_third_beck_answer
dostoevsky2.answers << second_fourth_beck_answer
dostoevsky2.save


















