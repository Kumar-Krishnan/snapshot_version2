User.destroy_all
Snap.destroy_all
Mood.destroy_all
TestScore.destroy_all



depression = Mood.new
depression.name = "Depression"
depression.save

anxiety = Mood.new
anxiety.name = "Anxiety"
anxiety.save

dostoevsky = User.new
dostoevsky.name = "Fyodor Dostoevsky"
dostoevsky.age = 60
dostoevsky.gender = 2
dostoevsky.save

young_dos_man = Snap.new
young_dos_man.user_id = dostoevsky.id
young_dos_man.save

young_dos_man_dep_score = TestScore.new
young_dos_man_dep_score.score = 10
young_dos_man_dep_score.mood_id = depression.id
young_dos_man_dep_score.snap_id = young_dos_man.id
young_dos_man_dep_score.user_id = dostoevsky.id
young_dos_man_dep_score.save

young_dos_man_anx_score = TestScore.new
young_dos_man_anx_score.score = 10
young_dos_man_anx_score.mood_id = anxiety.id
young_dos_man_anx_score.snap_id = young_dos_man.id
young_dos_man_anx_score.user_id = dostoevsky.id
young_dos_man_anx_score.save

old_dos_dude = Snap.new
old_dos_dude.user_id = dostoevsky.id
old_dos_dude.save

old_dos_dude_dep_score = TestScore.new
old_dos_dude_dep_score.score = 3
old_dos_dude_dep_score.mood_id = depression.id
old_dos_dude_dep_score.snap_id = old_dos_dude.id
old_dos_dude_dep_score.user_id = dostoevsky.id
old_dos_dude_dep_score.save

old_dos_dude_anx_score = TestScore.new
old_dos_dude_anx_score.score = 3
old_dos_dude_anx_score.mood_id = anxiety.id
old_dos_dude_anx_score.snap_id = old_dos_dude.id
old_dos_dude_anx_score.user_id = dostoevsky.id
old_dos_dude_anx_score.save


franklin = User.new
franklin.name = "Benjamin Franklin"
franklin.age = 60
franklin.gender = 2
franklin.save

young_franklin_bro = Snap.new
young_franklin_bro.user_id = franklin.id
young_franklin_bro.save

young_franklin_bro_dep_score = TestScore.new
young_franklin_bro_dep_score.score = 1
young_franklin_bro_dep_score.mood_id = depression.id
young_franklin_bro_dep_score.snap_id = young_franklin_bro.id
young_franklin_bro_dep_score.user_id = franklin.id
young_franklin_bro_dep_score.save

young_franklin_bro_anx_score = TestScore.new
young_franklin_bro_anx_score.score = 1
young_franklin_bro_anx_score.mood_id = anxiety.id
young_franklin_bro_anx_score.snap_id = young_franklin_bro.id
young_franklin_bro_anx_score.user_id = franklin.id
young_franklin_bro_anx_score.save

old_franklin_g = Snap.new
old_franklin_g.user_id = franklin.id
old_franklin_g.save

old_franklin_g_dep_score = TestScore.new
old_franklin_g_dep_score.score = 3
old_franklin_g_dep_score.mood_id = depression.id
old_franklin_g_dep_score.snap_id = old_franklin_g.id
old_franklin_g_dep_score.user_id = franklin.id
old_franklin_g_dep_score.save

old_franklin_g_anx_score = TestScore.new
old_franklin_g_anx_score.score = 3
old_franklin_g_anx_score.mood_id = anxiety.id
old_franklin_g_anx_score.snap_id = old_franklin_g.id
old_franklin_g_anx_score.user_id = franklin.id
old_franklin_g_anx_score.save
















