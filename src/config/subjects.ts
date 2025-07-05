export const subjectList = {
	toan: {
		10: {
			'Mệnh đề': {
				'Khái niệm mệnh đề': {
					'Công thức': '',
					'Lý thuyết':
						'Mệnh đề là một khẳng định đúng hoặc một khẳng định sai. Một mệnh đề không thể vừa đúng, vừa sai.',
					UUID: '1753279a-e4e5-44b8-803c-2bd66a4cddd7',
				},
				'Mệnh đề phủ định': {
					'Công thức': '\\bar{P}',
					'Lý thuyết':
						'Mệnh đề P và mệnh đề phủ định của nó (ký hiệu là \\bar{P}) là hai mệnh đề có tính đúng sai trái ngược nhau. Nếu P đúng thì \\bar{P} sai, và nếu P sai thì \\bar{P} đúng.',
					UUID: 'b8bfe45b-d5d3-41f0-adab-22c28fecdeca',
				},
				'Mệnh đề kéo theo': {
					'Công thức': 'P \\Rightarrow Q',
					'Lý thuyết':
						"Mệnh đề có dạng 'Nếu P thì Q', ký hiệu là P \\Rightarrow Q. Mệnh đề này chỉ sai khi P đúng và Q sai.",
					UUID: '38f7038b-ac00-4849-9a12-20b07c7ef83f',
				},
				'Mệnh đề đảo': {
					'Công thức': 'Q \\Rightarrow P',
					'Lý thuyết':
						'Mệnh đề Q \\Rightarrow P được gọi là mệnh đề đảo của mệnh đề P \\Rightarrow Q.',
					UUID: 'c6db5025-071d-439b-9dfb-4fefd8525178',
				},
				'Mệnh đề tương đương': {
					'Công thức': 'P \\Leftrightarrow Q',
					'Lý thuyết':
						"Mệnh đề 'P tương đương Q', ký hiệu P \\Leftrightarrow Q, đúng khi và chỉ khi cả hai mệnh đề P \\Rightarrow Q và Q \\Rightarrow P đều đúng. Có thể đọc là 'P khi và chỉ khi Q' hoặc 'P nếu và chỉ nếu Q'.",
					UUID: '0f7735e5-43a2-4647-abbd-27c9dbe41bc7',
				},
				'Mệnh đề chứa kí hiệu ∀ (với mọi)': {
					'Công thức': '\\forall x \\in M, P(x)',
					'Lý thuyết':
						'Mệnh đề khẳng định rằng với mọi giá trị của x thuộc tập hợp M, mệnh đề P(x) là đúng.',
					UUID: '7492859e-2c07-48a5-b9fa-347fd30a734f',
				},
				'Mệnh đề chứa kí hiệu ∃ (tồn tại)': {
					'Công thức': '\\exists x \\in M, P(x)',
					'Lý thuyết':
						'Mệnh đề khẳng định rằng có ít nhất một giá trị x thuộc tập hợp M sao cho mệnh đề P(x) là đúng.',
					UUID: 'c789e8b1-9907-47c3-a915-65a311c60c21',
				},
			},
			'Tập hợp': {
				'Tập hợp con': {
					'Công thức': 'A \\subset B',
					'Lý thuyết':
						'Nếu mọi phần tử của tập hợp A đều là phần tử của tập hợp B thì ta nói A là một tập hợp con của B.',
					UUID: '7458797e-f972-4ee9-8209-fa7f53a4e083',
				},
				'Tập hợp bằng nhau': {
					'Công thức': 'A = B \\Leftrightarrow (A \\subset B \\text{ và } B \\subset A)',
					'Lý thuyết':
						'Hai tập hợp A và B được gọi là bằng nhau nếu A là tập con của B và ngược lại, B cũng là tập con của A.',
					UUID: '8197ecb3-fe44-474a-b740-092021c3378a',
				},
				'Giao của hai tập hợp': {
					'Công thức': 'A \\cap B = \\{x | x \\in A \\text{ và } x \\in B\\}',
					'Lý thuyết':
						'Giao của hai tập hợp A và B là tập hợp chứa tất cả các phần tử vừa thuộc A, vừa thuộc B.',
					UUID: '028091af-9463-4e36-ac4f-773568dce9c9',
				},
				'Hợp của hai tập hợp': {
					'Công thức': 'A \\cup B = \\{x | x \\in A \\text{ hoặc } x \\in B\\}',
					'Lý thuyết':
						'Hợp của hai tập hợp A và B là tập hợp chứa tất cả các phần tử thuộc A hoặc thuộc B.',
					UUID: '8ddb9028-a93d-4cb0-9598-6fc8473d760e',
				},
				'Hiệu của hai tập hợp': {
					'Công thức': 'A \\setminus B = \\{x | x \\in A \\text{ và } x \\notin B\\}',
					'Lý thuyết':
						'Hiệu của hai tập hợp A và B là tập hợp chứa các phần tử thuộc A nhưng không thuộc B.',
					UUID: 'd8307d3c-39b3-4f61-b133-a9242bf7b467',
				},
				'Phần bù': {
					'Công thức': 'C_E A = E \\setminus A',
					'Lý thuyết':
						'Nếu A là tập con của E, thì phần bù của A trong E, ký hiệu là C_E A, chính là hiệu E \\setminus A.',
					UUID: '15d5f64e-6717-4686-9600-48a8c06a828d',
				},
			},
			'Bất phương trình bậc nhất hai ẩn': {
				'Dạng tổng quát': {
					'Công thức': 'ax + by + c < 0',
					'Lý thuyết':
						'Bất phương trình bậc nhất hai ẩn x, y có dạng tổng quát là ax + by + c < 0 (hoặc các dạng >, ≤, ≥), trong đó a, b, c là các số thực, và a, b không đồng thời bằng 0.',
					UUID: '7a43ccd9-26c9-48a4-93b7-52dfee95b1a3',
				},
				'Hệ bất phương trình': {
					'Công thức': "\\begin{cases} ax + by < c \\\\ a'x + b'y < c' \\end{cases}",
					'Lý thuyết':
						'Là một hệ thống gồm hai hay nhiều bất phương trình bậc nhất hai ẩn. Nghiệm của hệ là nghiệm chung của tất cả các bất phương trình trong hệ.',
					UUID: '340f4b05-7214-4f94-bbc4-56834ff05c36',
				},
			},
			'Hàm số và đồ thị': {
				'Tập xác định': {
					'Công thức': 'D',
					'Lý thuyết': 'Là tập hợp tất cả các giá trị của x sao cho biểu thức f(x) có nghĩa.',
					UUID: 'acb3f869-5955-4b6b-bdd3-98cf522f10de',
				},
				'Tập giá trị': {
					'Công thức': 'T = \\{y | y = f(x), x \\in D\\}',
					'Lý thuyết':
						'Là tập hợp tất cả các giá trị của y = f(x) khi x thay đổi trong tập xác định D.',
					UUID: '1439153f-ff29-48c7-938e-218d15b04a50',
				},
				'Hàm số đồng biến': {
					'Công thức': '\\forall x_1, x_2 \\in (a, b), x_1 < x_2 \\Rightarrow f(x_1) < f(x_2)',
					'Lý thuyết':
						'Hàm số được gọi là đồng biến (hay tăng) trên một khoảng nếu giá trị của hàm số tăng lên khi biến số tăng lên trong khoảng đó.',
					UUID: 'f55c65e7-8b0a-4d04-9291-55f7bcbe5192',
				},
				'Hàm số nghịch biến': {
					'Công thức': '\\forall x_1, x_2 \\in (a, b), x_1 < x_2 \\Rightarrow f(x_1) > f(x_2)',
					'Lý thuyết':
						'Hàm số được gọi là nghịch biến (hay giảm) trên một khoảng nếu giá trị của hàm số giảm xuống khi biến số tăng lên trong khoảng đó.',
					UUID: '6b4546c5-f66b-4d59-8749-023e421a6c1c',
				},
				'Hàm số bậc hai - Dạng tổng quát': {
					'Công thức': 'y = ax^2 + bx + c \\quad (a \\neq 0)',
					'Lý thuyết':
						'Là hàm số có công thức như trên, với a, b, c là các hằng số và a phải khác 0. Đồ thị của nó là một đường parabol.',
					UUID: 'c9877612-8803-456e-b855-ea5ac48e19f4',
				},
				'Hàm số bậc hai - Đỉnh Parabol': {
					'Công thức': 'S(-\\frac{b}{2a}, -\\frac{\\Delta}{4a})',
					'Lý thuyết':
						'Là điểm cao nhất hoặc thấp nhất của đồ thị parabol, tùy thuộc vào dấu của hệ số a.',
					UUID: '1ed7ddf3-8072-49a1-8c98-345ed29e47c9',
				},
				'Hàm số bậc hai - Trục đối xứng': {
					'Công thức': 'x = -\\frac{b}{2a}',
					'Lý thuyết':
						'Là đường thẳng đứng đi qua đỉnh của parabol, chia parabol thành hai phần đối xứng.',
					UUID: 'cb18edb4-d959-4a52-8106-d7b2a15e8569',
				},
			},
			'Hệ thức lượng trong tam giác': {
				'Giá trị lượng giác - sin': {
					'Công thức': '\\sin\\alpha = y_0',
					'Lý thuyết':
						'Trong đường tròn đơn vị, sin của một góc là tung độ của điểm biểu diễn góc đó.',
					UUID: '702434a9-1a83-4953-b21b-59ee204e8705',
				},
				'Giá trị lượng giác - cos': {
					'Công thức': '\\cos\\alpha = x_0',
					'Lý thuyết':
						'Trong đường tròn đơn vị, cos của một góc là hoành độ của điểm biểu diễn góc đó.',
					UUID: '8fc6e8fa-b61d-41ff-9254-b168e3959141',
				},
				'Giá trị lượng giác - tan': {
					'Công thức': '\\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}',
					'Lý thuyết':
						'Tan của một góc được định nghĩa là tỉ số giữa sin và cos của góc đó (với cos khác 0).',
					UUID: '48c3f53b-e764-4e51-add6-7a02273f5f1c',
				},
				'Giá trị lượng giác - cot': {
					'Công thức': '\\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}',
					'Lý thuyết':
						'Cotan của một góc được định nghĩa là tỉ số giữa cos và sin của góc đó (với sin khác 0).',
					UUID: 'fc8c23ae-fca7-4fc9-b8e3-e529b87e4e2e',
				},
				'Hệ thức lượng giác cơ bản 1': {
					'Công thức': '\\sin^2\\alpha + \\cos^2\\alpha = 1',
					'Lý thuyết': 'Tổng bình phương của sin và cos của cùng một góc luôn bằng 1.',
					UUID: 'd7735eb7-2c2e-492f-9ad5-62b501df9910',
				},
				'Hệ thức lượng giác cơ bản 2': {
					'Công thức': '1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}',
					'Lý thuyết': 'Mối liên hệ giữa tan và cos của một góc.',
					UUID: 'd96369a2-0572-4b85-a169-ec8a625a1478',
				},
				'Hệ thức lượng giác cơ bản 3': {
					'Công thức': '1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}',
					'Lý thuyết': 'Mối liên hệ giữa cotan và sin của một góc.',
					UUID: 'ab097382-cee3-49ea-87a9-862fb12cb2b9',
				},
				'Định lí Cosin': {
					'Công thức': 'a^2 = b^2 + c^2 - 2bc \\cos A',
					'Lý thuyết':
						'Cho phép tính độ dài một cạnh của tam giác khi biết độ dài hai cạnh còn lại và góc xen giữa chúng.',
					UUID: '2285b83c-4c5b-41ef-8420-5cead51649cd',
				},
				'Hệ quả Định lí Cosin': {
					'Công thức': '\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}',
					'Lý thuyết': 'Cho phép tính cosin của một góc khi biết độ dài ba cạnh của tam giác.',
					UUID: '75a8d436-6b55-4bac-bd1b-e5694705ad84',
				},
				'Định lí Sin': {
					'Công thức': '\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R',
					'Lý thuyết':
						'Thiết lập mối quan hệ giữa các cạnh, các góc và bán kính đường tròn ngoại tiếp của một tam giác.',
					UUID: '46706f4e-a543-447b-abb5-8606a7d35c0f',
				},
				'Diện tích tam giác (theo đường cao)': {
					'Công thức': 'S = \\frac{1}{2} a h_a',
					'Lý thuyết': 'Diện tích tam giác bằng một nửa tích của một cạnh với chiều cao tương ứng.',
					UUID: '452ea4ae-1ad9-4398-b1cc-af8329063ea5',
				},
				'Diện tích tam giác (theo sin)': {
					'Công thức': 'S = \\frac{1}{2}ab\\sin C',
					'Lý thuyết':
						'Diện tích tam giác bằng một nửa tích hai cạnh nhân với sin của góc xen giữa.',
					UUID: 'a600ca48-24da-4f49-a6c5-09036c9214df',
				},
				'Diện tích tam giác (theo R)': {
					'Công thức': 'S = \\frac{abc}{4R}',
					'Lý thuyết':
						'Diện tích tam giác có thể được tính thông qua tích ba cạnh và bán kính đường tròn ngoại tiếp R.',
					UUID: '49e33344-1e39-4163-b937-0ee0ed4375f5',
				},
				'Diện tích tam giác (theo r)': {
					'Công thức': 'S = pr',
					'Lý thuyết':
						'Diện tích tam giác bằng tích của nửa chu vi (p) và bán kính đường tròn nội tiếp (r).',
					UUID: 'ebd12b11-d494-4ecd-abc3-78c408792d7b',
				},
				'Diện tích tam giác (Heron)': {
					'Công thức': 'S = \\sqrt{p(p-a)(p-b)(p-c)}',
					'Lý thuyết':
						'Công thức Heron cho phép tính diện tích tam giác khi chỉ biết độ dài ba cạnh của nó.',
					UUID: 'f1a488a2-dc5a-4b06-b86e-71c28e5a27f7',
				},
			},
			Vector: {
				'Quy tắc ba điểm': {
					'Công thức': '\\vec{AB} + \\vec{BC} = \\vec{AC}',
					'Lý thuyết':
						'Với ba điểm bất kỳ A, B, C, vector tổng của \\vec{AB} và \\vec{BC} là vector \\vec{AC}.',
					UUID: '862d0af6-78d6-4671-af27-3de99955c274',
				},
				'Quy tắc hình bình hành': {
					'Công thức': '\\vec{AB} + \\vec{AD} = \\vec{AC}',
					'Lý thuyết':
						'Nếu ABCD là một hình bình hành, thì tổng của hai vector \\vec{AB} và \\vec{AD} là vector đường chéo \\vec{AC}.',
					UUID: '1a4ec105-bc5a-40ea-a0e3-470bdf9ca407',
				},
				'Hiệu hai vector': {
					'Công thức': '\\vec{a} - \\vec{b} = \\vec{a} + (-\\vec{b})',
					'Lý thuyết':
						'Hiệu của hai vector là phép cộng vector thứ nhất với vector đối của vector thứ hai.',
					UUID: '9d91e539-2179-4fe4-8076-54c39e5a7078',
				},
				'Tích của một số với một vector': {
					'Công thức': 'k\\vec{a}',
					'Lý thuyết':
						'Là một vector có độ dài bằng |k| lần độ dài vector \\vec{a}, cùng hướng với \\vec{a} nếu k > 0 và ngược hướng nếu k < 0.',
					UUID: 'bfce0257-c41b-445f-824f-d85e2707c7dd',
				},
				'Tích vô hướng của hai vector': {
					'Công thức':
						'\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})',
					'Lý thuyết':
						'Là một giá trị vô hướng (một số), được tính bằng tích độ dài của hai vector nhân với cosin của góc tạo bởi chúng.',
					UUID: '201d089e-c753-4556-a9dc-582d7e0c6a38',
				},
				'Bình phương vô hướng': {
					'Công thức': '\\vec{a}^2 = |\\vec{a}|^2',
					'Lý thuyết':
						'Bình phương vô hướng của một vector bằng bình phương độ dài của chính vector đó.',
					UUID: '93b5a342-70c5-4cfa-aa37-9d772b41ccd8',
				},
			},
			'Thống kê': {
				'Sai số tuyệt đối': {
					'Công thức': '\\Delta_a = |\\bar{a} - a|',
					'Lý thuyết': 'Là giá trị tuyệt đối của hiệu giữa số đúng (\\bar{a}) và số gần đúng (a).',
					UUID: '98b5f6b7-2bba-44b3-94a3-10519dd6bcd3',
				},
				'Sai số tương đối': {
					'Công thức': '\\delta_a = \\frac{\\Delta_a}{|a|}',
					'Lý thuyết':
						'Là tỉ số giữa sai số tuyệt đối và giá trị tuyệt đối của số gần đúng, thể hiện mức độ chính xác tương đối.',
					UUID: '234d59af-cdc6-49f0-af71-bcc97271a81f',
				},
				'Số trung bình': {
					'Công thức': '\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}',
					'Lý thuyết':
						'Là giá trị trung tâm của một tập dữ liệu, được tính bằng tổng tất cả các giá trị chia cho số lượng các giá trị.',
					UUID: '9b33ff8f-b3d0-4a4a-a8ce-0d05578e6450',
				},
				'Trung vị': {
					'Công thức': 'M_e',
					'Lý thuyết':
						'Là giá trị nằm ở vị trí chính giữa của một mẫu số liệu đã được sắp xếp theo thứ tự. Nếu số phần tử là chẵn, trung vị là trung bình cộng của hai giá trị ở giữa.',
					UUID: '35548986-1746-45cc-96f9-fad873b754ee',
				},
				'Tứ phân vị': {
					'Công thức': 'Q_1, Q_2, Q_3',
					'Lý thuyết':
						'Là các giá trị chia một mẫu số liệu đã sắp xếp thành bốn phần có số lượng phần tử bằng nhau. Q2 chính là trung vị.',
					UUID: '6b1dd7dc-f900-4ba7-8081-2355b51ea463',
				},
				Mốt: {
					'Công thức': 'M_o',
					'Lý thuyết': 'Là giá trị có tần số xuất hiện cao nhất trong một mẫu số liệu.',
					UUID: '67afa179-ffac-4c90-9070-a20812f5261b',
				},
				'Khoảng biến thiên': {
					'Công thức': 'R = x_{max} - x_{min}',
					'Lý thuyết':
						"Là hiệu giữa giá trị lớn nhất và giá trị nhỏ nhất trong mẫu số liệu, cho biết độ 'trải rộng' của dữ liệu.",
					UUID: '7a413a47-fc6d-478c-b3f4-eeb4d7f982fd',
				},
				'Khoảng tứ phân vị': {
					'Công thức': '\\Delta_Q = Q_3 - Q_1',
					'Lý thuyết':
						'Là hiệu giữa tứ phân vị thứ ba và tứ phân vị thứ nhất, đo lường độ phân tán của 50% dữ liệu ở giữa.',
					UUID: '28b5e797-9dbb-4fc2-b953-6af65972e361',
				},
				'Phương sai': {
					'Công thức': 'S^2 = \\frac{1}{n}\\sum_{i=1}^{n}(x_i - \\bar{x})^2',
					'Lý thuyết':
						'Là trung bình của bình phương các độ lệch của từng giá trị so với số trung bình, đo mức độ phân tán của dữ liệu.',
					UUID: 'e1baea39-f690-404f-ab69-3ac23af0451f',
				},
				'Độ lệch chuẩn': {
					'Công thức': 'S = \\sqrt{S^2}',
					'Lý thuyết':
						'Là căn bậc hai của phương sai, đưa đơn vị đo về cùng đơn vị với dữ liệu gốc.',
					UUID: 'd9c99d69-8c31-4fed-b2d7-25d729b656de',
				},
			},
			'Bất phương trình bậc hai': {
				'Tam thức bậc hai': {
					'Công thức': 'f(x) = ax^2 + bx + c \\quad (a \\neq 0)',
					'Lý thuyết':
						'Tam thức bậc hai đối với x là một biểu thức có dạng f(x) = ax^2 + bx + c, trong đó a, b, c là các hệ số đã cho và a khác 0.',
					UUID: '91dc2c33-99e0-47fb-a27b-8a6c5d91f743',
				},
				'Định lí về dấu của tam thức bậc hai': {
					'Công thức': '',
					'Lý thuyết':
						'Cho tam thức bậc hai f(x) = ax^2 + bx + c (a ≠ 0) có biệt thức Δ = b^2 - 4ac:\n- Nếu Δ < 0, thì f(x) luôn cùng dấu với hệ số a với mọi x ∈ ℝ.\n- Nếu Δ = 0, thì f(x) có nghiệm kép x = -b/(2a) và f(x) luôn cùng dấu với hệ số a với mọi x ≠ -b/(2a).\n- Nếu Δ > 0, f(x) có hai nghiệm phân biệt x₁, x₂ (giả sử x₁ < x₂). Khi đó, f(x) cùng dấu với a khi x < x₁ hoặc x > x₂, và f(x) trái dấu với a khi x₁ < x < x₂.',
					UUID: '6b2097d3-e158-4be5-95a8-d49215116813',
				},
				'Bất phương trình bậc hai một ẩn': {
					'Công thức': 'ax^2 + bx + c > 0',
					'Lý thuyết':
						'Là bất phương trình có một trong các dạng ax^2 + bx + c > 0, ax^2 + bx + c < 0, ax^2 + bx + c ≥ 0, ax^2 + bx + c ≤ 0, trong đó a, b, c là các số thực đã cho và a khác 0.',
					UUID: '29c6d28e-4ace-4e77-9ce2-8886280f9b73',
				},
				'Phương trình quy về phương trình bậc hai (Dạng 1)': {
					'Công thức': '\\sqrt{ax^2 + bx + c} = \\sqrt{dx^2 + ex + f}',
					'Lý thuyết':
						'Phương pháp giải: Bình phương hai vế và đặt điều kiện để biểu thức dưới căn không âm.',
					UUID: '1c60f59d-339b-4327-ad11-839907a0e061',
				},
				'Phương trình quy về phương trình bậc hai (Dạng 2)': {
					'Công thức': '\\sqrt{ax^2 + bx + c} = dx + e',
					'Lý thuyết':
						'Phương pháp giải: Bình phương hai vế và đặt điều kiện vế phải (dx + e) không âm.',
					UUID: '3615207f-64e4-4ed1-b69c-253181049c49',
				},
			},
			'Đại số tổ hợp': {
				'Quy tắc cộng': {
					'Công thức': 'm+n',
					'Lý thuyết':
						'Nếu một công việc có thể được thực hiện theo một trong hai phương án A hoặc B. Nếu phương án A có m cách thực hiện và phương án B có n cách thực hiện không trùng với bất kỳ cách nào của phương án A, thì công việc đó có m + n cách thực hiện.',
					UUID: 'a9a20fcc-a342-45fa-a636-a45d838c9de6',
				},
				'Quy tắc nhân': {
					'Công thức': 'm \\times n',
					'Lý thuyết':
						'Nếu một công việc được chia thành hai công đoạn. Công đoạn thứ nhất có m cách thực hiện và ứng với mỗi cách đó có n cách thực hiện công đoạn thứ hai. Khi đó, công việc có m x n cách thực hiện.',
					UUID: '1bbe9a8f-7f50-4e06-986d-9e881faf3c4b',
				},
				'Hoán vị': {
					'Công thức': 'P_n = n!',
					'Lý thuyết':
						'Một hoán vị của n phần tử là một cách sắp xếp n phần tử đó theo một thứ tự nhất định.',
					UUID: 'ff4369e4-721e-4ca3-a225-eb4f2ca916bc',
				},
				'Chỉnh hợp': {
					'Công thức': 'A_n^k = \\frac{n!}{(n-k)!}',
					'Lý thuyết':
						'Một chỉnh hợp chập k của n phần tử là một cách lấy k phần tử từ n phần tử và sắp xếp chúng theo một thứ tự.',
					UUID: '13553c86-f1bc-4e52-a7cf-fbe36bd821d4',
				},
				'Tổ hợp': {
					'Công thức': 'C_n^k = \\frac{n!}{k!(n-k)!}',
					'Lý thuyết':
						'Một tổ hợp chập k của n phần tử là một cách lấy k phần tử từ n phần tử mà không quan tâm đến thứ tự.',
					UUID: 'a5484784-c72b-4ec0-a1ba-e5483554759c',
				},
				'Nhị thức Newton': {
					'Công thức': '(a+b)^n = \\sum_{k=0}^{n} C_n^k a^{n-k} b^k',
					'Lý thuyết':
						'Công thức khai triển một luỹ thừa bậc n của một tổng hai số hạng (nhị thức).',
					UUID: '4da4451d-8d32-45b1-be16-0e39e259a515',
				},
			},
			'Phương pháp toạ độ trong mặt phẳng': {
				'Biểu thức toạ độ của phép cộng vector': {
					'Công thức': '\\vec{a} + \\vec{b} = (a_1+b_1; a_2+b_2)',
					'Lý thuyết': '',
					UUID: '773ff648-07a8-4c82-acdc-52cfd4f32872',
				},
				'Biểu thức toạ độ của phép trừ vector': {
					'Công thức': '\\vec{a} - \\vec{b} = (a_1-b_1; a_2-b_2)',
					'Lý thuyết': '',
					UUID: '03d391ce-fcf6-438b-9a3b-f17828c23089',
				},
				'Biểu thức toạ độ của phép nhân vector với một số': {
					'Công thức': 'k\\vec{a} = (ka_1; ka_2)',
					'Lý thuyết': '',
					UUID: 'b9c424bc-f493-4535-891c-460c788164fc',
				},
				'Biểu thức toạ độ của tích vô hướng': {
					'Công thức': '\\vec{a} \\cdot \\vec{b} = a_1b_1 + a_2b_2',
					'Lý thuyết': '',
					UUID: '63b07c96-956e-4c30-8ca5-8208927765b8',
				},
				'Toạ độ vector theo hai điểm': {
					'Công thức': '\\vec{AB} = (x_B - x_A; y_B - y_A)',
					'Lý thuyết': '',
					UUID: '662204bc-b37e-4c26-b819-6789848cdd7c',
				},
				'Toạ độ trung điểm đoạn thẳng': {
					'Công thức': 'x_M = \\frac{x_A+x_B}{2}; y_M = \\frac{y_A+y_B}{2}',
					'Lý thuyết': '',
					UUID: '394e9cbe-3b80-44e1-9a1c-8f96dc984db7',
				},
				'Toạ độ trọng tâm tam giác': {
					'Công thức': 'x_G = \\frac{x_A+x_B+x_C}{3}; y_G = \\frac{y_A+y_B+y_C}{3}',
					'Lý thuyết': '',
					UUID: '17bbb933-365a-4f78-9fb0-5b1ceddd9e44',
				},
				'Độ dài vector': {
					'Công thức': '|\\vec{a}| = \\sqrt{a_1^2 + a_2^2}',
					'Lý thuyết': '',
					UUID: '2c0cee6b-537b-4300-a093-a9d0710bd665',
				},
				'Khoảng cách giữa hai điểm': {
					'Công thức': 'AB = \\sqrt{(x_B-x_A)^2 + (y_B-y_A)^2}',
					'Lý thuyết': '',
					UUID: '0d8fb284-680c-4a27-a883-9a3398de418f',
				},
				'Góc giữa hai vector': {
					'Công thức':
						'\\cos(\\vec{a}, \\vec{b}) = \\frac{a_1b_1+a_2b_2}{\\sqrt{a_1^2+a_2^2} \\cdot \\sqrt{b_1^2+b_2^2}}',
					'Lý thuyết': '',
					UUID: 'b6d59fd2-5a88-422a-a1a0-05b5214d35d4',
				},
				'Phương trình tham số của đường thẳng': {
					'Công thức': '\\begin{cases} x = x_0 + u_1t \\\\ y = y_0 + u_2t \\end{cases}',
					'Lý thuyết':
						'Phương trình đường thẳng đi qua điểm M₀(x₀; y₀) và có vector chỉ phương u⃗ = (u₁; u₂).',
					UUID: '0d4d6b85-d87b-44b5-ae6c-1c4fe50d70fa',
				},
				'Phương trình tổng quát của đường thẳng': {
					'Công thức': 'ax + by + c = 0',
					'Lý thuyết': 'Phương trình đường thẳng có vector pháp tuyến n⃗ = (a; b).',
					UUID: '3fdcfbea-18dc-43b3-8a0a-8361aa393fee',
				},
				'Góc giữa hai đường thẳng': {
					'Công thức':
						'\\cos(\\Delta_1, \\Delta_2) = |\\cos(\\vec{n_1}, \\vec{n_2})| = \\frac{|a_1a_2+b_1b_2|}{\\sqrt{a_1^2+b_1^2} \\cdot \\sqrt{a_2^2+b_2^2}}',
					'Lý thuyết':
						'Góc giữa hai đường thẳng được tính thông qua cosin của góc giữa hai vector pháp tuyến tương ứng.',
					UUID: '7954553a-6491-4324-834f-17d1af21d3ba',
				},
				'Khoảng cách từ điểm đến đường thẳng': {
					'Công thức': 'd(M_0, \\Delta) = \\frac{|ax_0+by_0+c|}{\\sqrt{a^2+b^2}}',
					'Lý thuyết':
						'Khoảng cách từ điểm M₀(x₀; y₀) đến đường thẳng Δ có phương trình ax + by + c = 0.',
					UUID: '6f4e9821-d3ff-47e6-b4d9-8afe1df107ad',
				},
				'Phương trình đường tròn (Dạng chính tắc)': {
					'Công thức': '(x-a)^2 + (y-b)^2 = R^2',
					'Lý thuyết': 'Phương trình đường tròn có tâm I(a; b) và bán kính R.',
					UUID: '6d4fb15d-fb31-46f1-8a79-ad21a3fef61a',
				},
				'Phương trình đường tròn (Dạng tổng quát)': {
					'Công thức': 'x^2+y^2-2ax-2by+c=0',
					'Lý thuyết':
						'Điều kiện để là phương trình đường tròn: a² + b² - c > 0. Khi đó, tâm là I(a; b) và bán kính R = \\sqrt{a^2+b^2-c}.',
					UUID: 'ae4b8b5f-3a37-4b9b-bf24-e08edcbd89a9',
				},
				'Phương trình tiếp tuyến của đường tròn': {
					'Công thức': '(x_0-a)(x-x_0) + (y_0-b)(y-y_0) = 0',
					'Lý thuyết':
						'Phương trình tiếp tuyến của đường tròn (C) tại điểm M₀(x₀; y₀) nằm trên đường tròn.',
					UUID: '70b8af2f-6c64-40af-af7f-4d771c0f0a00',
				},
				'Phương trình chính tắc của Elip': {
					'Công thức': '\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1',
					'Lý thuyết':
						'Elip là tập hợp các điểm M trong mặt phẳng sao cho tổng khoảng cách từ M đến hai điểm cố định F₁, F₂ (tiêu điểm) là một hằng số 2a. Với a² = b² + c².',
					UUID: 'f9454954-482e-4c32-aa5a-3454fc09a96b',
				},
				'Phương trình chính tắc của Hypebol': {
					'Công thức': '\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1',
					'Lý thuyết':
						'Hypebol là tập hợp các điểm M trong mặt phẳng sao cho giá trị tuyệt đối của hiệu khoảng cách từ M đến hai điểm cố định F₁, F₂ (tiêu điểm) là một hằng số 2a. Với c² = a² + b².',
					UUID: '668e407f-2939-4814-8052-b0d099064643',
				},
				'Phương trình chính tắc của Parabol': {
					'Công thức': 'y^2 = 2px',
					'Lý thuyết':
						'Parabol là tập hợp các điểm M trong mặt phẳng cách đều một điểm cố định F (tiêu điểm) và một đường thẳng cố định Δ (đường chuẩn).',
					UUID: '613d0cdc-75ee-40ad-9fe6-c23dc90f2f77',
				},
			},
			'Xác suất': {
				'Không gian mẫu': {
					'Công thức': '\\Omega',
					'Lý thuyết':
						'Tập hợp tất cả các kết quả có thể có của một phép thử ngẫu nhiên được gọi là không gian mẫu của phép thử đó.',
					UUID: '7363fcc1-fe5f-4b74-9e81-3a2a23f1a1df',
				},
				'Biến cố': {
					'Công thức': '',
					'Lý thuyết': 'Một tập con của không gian mẫu được gọi là một biến cố.',
					UUID: '3178dc2f-aac7-4150-9aad-615f59a26838',
				},
				'Biến cố đối': {
					'Công thức': 'P(\\bar{A}) = 1 - P(A)',
					'Lý thuyết':
						"Biến cố 'Không xảy ra A', ký hiệu là \\bar{A}, được gọi là biến cố đối của A.",
					UUID: '051afad7-24d0-4008-a457-36c8b04c281a',
				},
				'Xác suất của biến cố (Định nghĩa cổ điển)': {
					'Công thức': 'P(A) = \\frac{n(A)}{n(\\Omega)}',
					'Lý thuyết':
						'Xác suất của biến cố A được xác định bởi tỉ số giữa số kết quả thuận lợi cho A và tổng số kết quả có thể xảy ra của phép thử.',
					UUID: '571050dc-4610-4067-aca2-36b421c8fa02',
				},
			},
		},
		11: {
			'Hàm số lượng giác và Phương trình lượng giác': {
				'Hệ thức Chasles': {
					'Công thức': '(Oa, Ob) + (Ob, Oc) = (Oa, Oc) + k360^{\\circ} \\quad (k \\in \\mathbb{Z})',
					'Lý thuyết':
						'Với ba tia Oa, Ob, Oc bất kì, ta có hệ thức về số đo của các góc lượng giác.',
					UUID: '6ba03ebf-6c31-44a0-a5ce-bdbd570f7438',
				},
				'Đổi đơn vị đo góc': {
					'Công thức':
						'a^{\\circ} = \\frac{\\pi a}{180} \\text{ rad}; \\quad \\alpha \\text{ rad} = (\\frac{180\\alpha}{\\pi})^{\\circ}',
					'Lý thuyết': 'Công thức chuyển đổi giữa đơn vị độ và đơn vị radian.',
					UUID: 'a4c86102-7584-41fb-837c-e143f7dacdd7',
				},
				'Giá trị lượng giác của góc lượng giác': {
					'Công thức':
						'\\sin\\alpha = y_M; \\quad \\cos\\alpha = x_M; \\quad \\tan\\alpha = \\frac{\\sin\\alpha}{\\cos\\alpha}; \\quad \\cot\\alpha = \\frac{\\cos\\alpha}{\\sin\\alpha}',
					'Lý thuyết':
						'Trên đường tròn lượng giác, với điểm M(x_M, y_M) là điểm biểu diễn của góc lượng giác α, ta có các định nghĩa về giá trị lượng giác.',
					UUID: '4b39d5bd-84dc-4893-a02f-79437fdcba1d',
				},
				'Hệ thức lượng giác cơ bản': {
					'Công thức':
						'\\sin^2\\alpha + \\cos^2\\alpha = 1; \\quad 1 + \\tan^2\\alpha = \\frac{1}{\\cos^2\\alpha}; \\quad 1 + \\cot^2\\alpha = \\frac{1}{\\sin^2\\alpha}',
					'Lý thuyết': 'Các hệ thức cơ bản liên kết các giá trị lượng giác của cùng một góc.',
					UUID: '37f779f1-10b6-4073-8865-bbb5dd08e660',
				},
				'Giá trị lượng giác của các góc có liên quan đặc biệt': {
					'Công thức':
						'\\sin(-\\alpha) = -\\sin\\alpha; \\cos(-\\alpha) = \\cos\\alpha; \\sin(\\pi - \\alpha) = \\sin\\alpha; \\cos(\\pi - \\alpha) = -\\cos\\alpha; \\sin(\\pi + \\alpha) = -\\sin\\alpha; \\cos(\\pi + \\alpha) = -\\cos\\alpha; \\sin(\\frac{\\pi}{2} - \\alpha) = \\cos\\alpha; \\cos(\\frac{\\pi}{2} - \\alpha) = \\sin\\alpha',
					'Lý thuyết': 'Công thức cho các góc đối nhau, bù nhau, hơn kém pi, và phụ nhau.',
					UUID: '8599b6f9-f2bd-46c1-ab29-cc89dbbbbb84',
				},
				'Công thức cộng': {
					'Công thức':
						'\\cos(a \\pm b) = \\cos a \\cos b \\mp \\sin a \\sin b; \\quad \\sin(a \\pm b) = \\sin a \\cos b \\pm \\cos a \\sin b; \\quad \\tan(a \\pm b) = \\frac{\\tan a \\pm \\tan b}{1 \\mp \\tan a \\tan b}',
					'Lý thuyết': '',
					UUID: 'bc84143f-af7c-4925-8550-3ff073198902',
				},
				'Công thức nhân đôi': {
					'Công thức':
						'\\sin 2a = 2\\sin a\\cos a; \\quad \\cos 2a = \\cos^2 a - \\sin^2 a = 2\\cos^2 a - 1 = 1 - 2\\sin^2 a; \\quad \\tan 2a = \\frac{2\\tan a}{1 - \\tan^2 a}',
					'Lý thuyết': '',
					UUID: 'fac0f220-7cfe-4b07-802b-07454223d774',
				},
				'Công thức biến đổi tích thành tổng': {
					'Công thức':
						'\\cos a \\cos b = \\frac{1}{2}[\\cos(a-b) + \\cos(a+b)]; \\quad \\sin a \\sin b = \\frac{1}{2}[\\cos(a-b) - \\cos(a+b)]; \\quad \\sin a \\cos b = \\frac{1}{2}[\\sin(a-b) + \\sin(a+b)]',
					'Lý thuyết': '',
					UUID: '2c6f1f8b-1956-4793-bdfe-e0e319248e89',
				},
				'Công thức biến đổi tổng thành tích': {
					'Công thức':
						'\\cos a + \\cos b = 2\\cos\\frac{a+b}{2}\\cos\\frac{a-b}{2}; \\quad \\cos a - \\cos b = -2\\sin\\frac{a+b}{2}\\sin\\frac{a-b}{2}; \\quad \\sin a + \\sin b = 2\\sin\\frac{a+b}{2}\\cos\\frac{a-b}{2}; \\quad \\sin a - \\sin b = 2\\cos\\frac{a+b}{2}\\sin\\frac{a-b}{2}',
					'Lý thuyết': '',
					UUID: 'd72a7f43-8094-42cc-ac85-09d5e3d47235',
				},
				'Hàm số chẵn, lẻ': {
					'Công thức': 'f(-x) = f(x); \\quad f(-x) = -f(x)',
					'Lý thuyết':
						'Hàm số y = f(x) với tập xác định D được gọi là hàm số chẵn nếu với mọi x thuộc D ta có -x cũng thuộc D và f(-x) = f(x). Hàm số được gọi là lẻ nếu với mọi x thuộc D ta có -x cũng thuộc D và f(-x) = -f(x).',
					UUID: '57b45dfb-2955-4c44-bfdb-01bf714f86f9',
				},
				'Hàm số tuần hoàn': {
					'Công thức': 'f(x+T) = f(x)',
					'Lý thuyết':
						'Hàm số y = f(x) có tập xác định D được gọi là hàm số tuần hoàn nếu tồn tại một số T khác 0 sao cho với mọi x thuộc D, ta có x+T và x-T cũng thuộc D, và f(x+T) = f(x). Số T dương nhỏ nhất (nếu có) được gọi là chu kì của hàm số.',
					UUID: 'da50ba87-0149-4976-9ba7-92c0d848372d',
				},
				'Phương trình sinx = m': {
					'Công thức':
						'x = \\alpha + k2\\pi \\text{ hoặc } x = \\pi - \\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})',
					'Lý thuyết':
						'Nếu |m| > 1, phương trình vô nghiệm. Nếu |m| ≤ 1, tồn tại α sao cho sinα = m, và phương trình có các họ nghiệm như công thức.',
					UUID: '86fc7706-1533-4e57-9e90-99d05893fd23',
				},
				'Phương trình cosx = m': {
					'Công thức': 'x = \\pm\\alpha + k2\\pi \\quad (k \\in \\mathbb{Z})',
					'Lý thuyết':
						'Nếu |m| > 1, phương trình vô nghiệm. Nếu |m| ≤ 1, tồn tại α sao cho cosα = m, và phương trình có các họ nghiệm như công thức.',
					UUID: 'cf48c662-3387-48c0-871e-a8f3dbf647e7',
				},
				'Phương trình tanx = m': {
					'Công thức': 'x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})',
					'Lý thuyết':
						'Phương trình có nghiệm với mọi m. Tồn tại α sao cho tanα = m, và phương trình có họ nghiệm như công thức.',
					UUID: 'a2b98c99-8007-4e26-bceb-5e80d505f4fe',
				},
				'Phương trình cotx = m': {
					'Công thức': 'x = \\alpha + k\\pi \\quad (k \\in \\mathbb{Z})',
					'Lý thuyết':
						'Phương trình có nghiệm với mọi m. Tồn tại α sao cho cotα = m, và phương trình có họ nghiệm như công thức.',
					UUID: '9ef0e44f-510d-4897-a111-b07923a66cc8',
				},
			},
			'Dãy số, Cấp số cộng, Cấp số nhân': {
				'Dãy số': {
					'Công thức': '',
					'Lý thuyết':
						'Một hàm số u xác định trên tập hợp các số nguyên dương N* được gọi là một dãy số vô hạn. Kí hiệu (u_n).',
					UUID: '86c87de9-778e-4918-b557-96fd15ca4c35',
				},
				'Dãy số tăng, giảm': {
					'Công thức': 'u_{n+1} > u_n; \\quad u_{n+1} < u_n',
					'Lý thuyết':
						'Dãy số (u_n) được gọi là dãy số tăng nếu u_{n+1} > u_n với mọi n ∈ N*. Dãy số (u_n) được gọi là dãy số giảm nếu u_{n+1} < u_n với mọi n ∈ N*.',
					UUID: '2999fecc-81c1-4f01-bec5-450bef3713df',
				},
				'Dãy số bị chặn': {
					'Công thức': 'm \\le u_n \\le M',
					'Lý thuyết':
						'Dãy số (u_n) được gọi là bị chặn trên nếu tồn tại một số M sao cho u_n ≤ M với mọi n ∈ N*. Dãy số (u_n) được gọi là bị chặn dưới nếu tồn tại một số m sao cho u_n ≥ m với mọi n ∈ N*. Dãy số được gọi là bị chặn nếu nó vừa bị chặn trên, vừa bị chặn dưới.',
					UUID: 'dd5bd023-8209-43fb-98bb-abce7404dbb8',
				},
				'Cấp số cộng': {
					'Công thức': 'u_{n+1} = u_n + d',
					'Lý thuyết':
						'Là một dãy số mà trong đó, kể từ số hạng thứ hai, mỗi số hạng đều bằng tổng của số hạng đứng ngay trước nó với một số d không đổi. Số d được gọi là công sai.',
					UUID: '51d973ed-1a30-4e57-bb1a-fd9e4a14d918',
				},
				'Số hạng tổng quát của cấp số cộng': {
					'Công thức': 'u_n = u_1 + (n-1)d',
					'Lý thuyết': '',
					UUID: '6058f501-29bc-40dc-a157-8de86e12952e',
				},
				'Tổng n số hạng đầu của cấp số cộng': {
					'Công thức': 'S_n = \\frac{n(u_1 + u_n)}{2} = \\frac{n[2u_1 + (n-1)d]}{2}',
					'Lý thuyết': '',
					UUID: '33835ef2-ae85-48b4-90b1-73f874e37554',
				},
				'Cấp số nhân': {
					'Công thức': 'u_{n+1} = u_n \\cdot q',
					'Lý thuyết':
						'Là một dãy số mà trong đó, kể từ số hạng thứ hai, mỗi số hạng đều bằng tích của số hạng đứng ngay trước nó với một số q không đổi. Số q được gọi là công bội.',
					UUID: 'a67de4f1-2425-440b-8db2-55f2d97428be',
				},
				'Số hạng tổng quát của cấp số nhân': {
					'Công thức': 'u_n = u_1 \\cdot q^{n-1}',
					'Lý thuyết': '',
					UUID: 'd2577c13-1116-4f62-9ef3-3453c079dcc0',
				},
				'Tổng n số hạng đầu của cấp số nhân': {
					'Công thức': 'S_n = \\frac{u_1(1-q^n)}{1-q} \\quad (q \\neq 1)',
					'Lý thuyết': '',
					UUID: '921e80e6-94b2-43f3-a0f3-baade75ede31',
				},
			},
			'Giới hạn, Hàm số liên tục': {
				'Giới hạn hữu hạn của dãy số': {
					'Công thức': '\\lim_{n \\to +\\infty} u_n = L',
					'Lý thuyết':
						'Ta nói dãy số (u_n) có giới hạn hữu hạn là số L khi n dần tới dương vô cực, nếu |u_n - L| có thể nhỏ hơn một số dương bé tuỳ ý cho trước, kể từ một số hạng đủ lớn nào đó.',
					UUID: '656e40bc-ac3b-4db5-a225-70299965a49b',
				},
				'Các phép toán về giới hạn hữu hạn của dãy số': {
					'Công thức':
						'\\lim(u_n \\pm v_n) = L \\pm M; \\quad \\lim(u_n \\cdot v_n) = L \\cdot M; \\quad \\lim(\\frac{u_n}{v_n}) = \\frac{L}{M} \\quad (M \\neq 0)',
					'Lý thuyết': 'Nếu lim u_n = L và lim v_n = M.',
					UUID: '7218c8fa-0582-49a8-aa15-10b162cbd780',
				},
				'Tổng của cấp số nhân lùi vô hạn': {
					'Công thức': 'S = u_1 + u_2 + ... = \\frac{u_1}{1-q}',
					'Lý thuyết':
						'Cấp số nhân vô hạn có công bội q thỏa mãn |q| < 1 được gọi là cấp số nhân lùi vô hạn.',
					UUID: '7ae8dd48-1d6c-4808-bfb5-d199cff43d46',
				},
				'Giới hạn hữu hạn của hàm số tại một điểm': {
					'Công thức': '\\lim_{x \\to x_0} f(x) = L',
					'Lý thuyết':
						'Cho hàm số y = f(x) xác định trên một khoảng K chứa x₀. Ta nói hàm số f(x) có giới hạn là L khi x dần tới x₀ nếu với mọi dãy số (x_n) trong K \\ {x₀} mà lim x_n = x₀, ta đều có lim f(x_n) = L.',
					UUID: '576ac798-f5d0-4dba-9b3f-e073ecec50c8',
				},
				'Giới hạn một phía': {
					'Công thức': '\\lim_{x \\to x_0^+} f(x) = L; \\quad \\lim_{x \\to x_0^-} f(x) = L',
					'Lý thuyết':
						'Định nghĩa tương tự giới hạn tại một điểm, nhưng dãy (x_n) chỉ gồm các số lớn hơn x₀ (giới hạn phải) hoặc nhỏ hơn x₀ (giới hạn trái).',
					UUID: '8d049379-8286-472d-afc9-15381907b433',
				},
				'Giới hạn tại vô cực': {
					'Công thức': '\\lim_{x \\to +\\infty} f(x) = L; \\quad \\lim_{x \\to -\\infty} f(x) = L',
					'Lý thuyết': 'Định nghĩa tương tự giới hạn của dãy số.',
					UUID: 'd14daabc-f39e-4ff3-a9bc-30ab544b69c1',
				},
				'Hàm số liên tục tại một điểm': {
					'Công thức': '\\lim_{x \\to x_0} f(x) = f(x_0)',
					'Lý thuyết':
						'Hàm số y = f(x) được gọi là liên tục tại điểm x₀ nếu nó xác định tại x₀ và giới hạn của hàm số khi x dần tới x₀ bằng giá trị của hàm số tại x₀.',
					UUID: '03d41442-80af-4b7f-a99f-97a5784aeaab',
				},
				'Hàm số liên tục trên một khoảng/đoạn': {
					'Công thức': '',
					'Lý thuyết':
						'Hàm số y = f(x) được gọi là liên tục trên một khoảng nếu nó liên tục tại mọi điểm của khoảng đó. Hàm số liên tục trên đoạn [a, b] nếu nó liên tục trên khoảng (a, b) và lim_{x→a⁺} f(x) = f(a), lim_{x→b⁻} f(x) = f(b).',
					UUID: '1016c22d-2adc-4c81-b3e0-f8669244ec2c',
				},
			},
			'Quan hệ song song trong không gian': {
				'Vị trí tương đối của hai đường thẳng': {
					'Công thức': '',
					'Lý thuyết':
						'Trong không gian, hai đường thẳng có thể: đồng phẳng (cắt nhau, song song, trùng nhau) hoặc không đồng phẳng (chéo nhau).',
					UUID: '1ca94923-cfe1-4a86-9130-e6dbba5fbde0',
				},
				'Định lí về giao tuyến của ba mặt phẳng': {
					'Công thức':
						'a = (P) \\cap (R); b = (Q) \\cap (R); c = (P) \\cap (Q). \\text{Nếu } a // b \\text{ thì } a // b // c.',
					'Lý thuyết':
						'Nếu ba mặt phẳng phân biệt đôi một cắt nhau theo ba giao tuyến phân biệt, thì ba giao tuyến ấy hoặc đồng quy hoặc đôi một song song với nhau.',
					UUID: 'b90b762d-1427-4d91-ad07-8f9b1427dfaa',
				},
				'Đường thẳng song song với mặt phẳng': {
					'Công thức': 'a \\| (P) \\Leftrightarrow a \\cap (P) = \\emptyset',
					'Lý thuyết':
						'Một đường thẳng được gọi là song song với một mặt phẳng nếu chúng không có điểm chung.',
					UUID: '113a5d5c-cdb4-4fdf-9e49-57a46b42f5a9',
				},
				'Hai mặt phẳng song song': {
					'Công thức': '(P) \\| (Q) \\Leftrightarrow (P) \\cap (Q) = \\emptyset',
					'Lý thuyết':
						'Hai mặt phẳng được gọi là song song với nhau nếu chúng không có điểm chung.',
					UUID: '101da792-55a9-43e7-b76b-adaefec01c2a',
				},
				'Định lí Thalès trong không gian': {
					'Công thức': "\\frac{AB}{A'B'} = \\frac{BC}{B'C'} = \\frac{AC}{A'C'}",
					'Lý thuyết':
						'Ba mặt phẳng đôi một song song chắn trên hai cát tuyến bất kì các đoạn thẳng tương ứng tỉ lệ.',
					UUID: '69920046-52fd-42e1-a77e-81d4cba078df',
				},
				'Phép chiếu song song': {
					'Công thức': '',
					'Lý thuyết':
						"Phép đặt tương ứng mỗi điểm M trong không gian với điểm M' của mặt phẳng (P) theo phương l được gọi là phép chiếu song song lên mặt phẳng (P) theo phương l.",
					UUID: 'a6d9e37b-e2b2-4469-9253-779ae75ae494',
				},
			},
			'Thống kê cho mẫu số liệu ghép nhóm': {
				'Số trung bình': {
					'Công thức': '\\bar{x} = \\frac{n_1c_1 + n_2c_2 + ... + n_kc_k}{n}',
					'Lý thuyết':
						'c_k là giá trị đại diện của nhóm thứ k (trung bình cộng hai đầu mút), n_k là tần số của nhóm đó.',
					UUID: '7a09aecf-2b8a-45e0-9611-8aef6e0e5cad',
				},
				Mốt: {
					'Công thức':
						'M_o = u_m + \\frac{n_m - n_{m-1}}{(n_m - n_{m-1}) + (n_m - n_{m+1})} (u_{m+1} - u_m)',
					'Lý thuyết':
						'Nhóm chứa mốt là nhóm có tần số lớn nhất. u_m, u_{m+1} là đầu mút của nhóm chứa mốt; n_m là tần số nhóm chứa mốt; n_{m-1}, n_{m+1} là tần số nhóm liền trước và liền sau.',
					UUID: '1a49673d-ccb3-41aa-b9e1-0bc562d6f889',
				},
				'Trung vị': {
					'Công thức': 'M_e = u_m + \\frac{\\frac{n}{2} - C}{n_m} (u_{m+1} - u_m)',
					'Lý thuyết':
						'Nhóm chứa trung vị là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng n/2. C là tổng tần số các nhóm trước nhóm chứa trung vị.',
					UUID: 'd9acfa8e-6732-4f61-be6f-f06d2f1f078c',
				},
				'Tứ phân vị': {
					'Công thức': 'Q_j = u_p + \\frac{\\frac{jn}{4} - C}{n_p} (u_{p+1} - u_p)',
					'Lý thuyết':
						'j = 1, 2, 3. Nhóm chứa Q_j là nhóm đầu tiên có tần số tích lũy lớn hơn hoặc bằng jn/4. C là tổng tần số các nhóm trước nhóm chứa Q_j.',
					UUID: '9049623f-b6d5-4e67-91a6-0b74178ce126',
				},
			},
			'Hàm số mũ và Hàm số Lôgarit': {
				'Luỹ thừa với số mũ nguyên': {
					'Công thức': 'a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)',
					'Lý thuyết':
						'Luỹ thừa của một số thực a với số mũ nguyên n được định nghĩa. Với n là số nguyên âm, a^{-n} là nghịch đảo của a^n.',
					UUID: 'd2e1b267-6eee-4224-9839-52488b97b3fc',
				},
				'Căn bậc n': {
					'Công thức': '\\sqrt[n]{b} = a \\Leftrightarrow a^n = b',
					'Lý thuyết':
						'Với số nguyên dương n ≥ 2 và số thực b, số a được gọi là căn bậc n của b nếu a^n = b. Nếu n lẻ, có duy nhất một căn bậc n. Nếu n chẵn và b > 0, có hai căn bậc n đối nhau.',
					UUID: '9f8f8c68-59bc-4e3b-a393-798463aa740d',
				},
				'Tính chất của căn bậc n': {
					'Công thức':
						'\\sqrt[n]{ab} = \\sqrt[n]{a}\\sqrt[n]{b}; \\quad \\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}; \\quad (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}',
					'Lý thuyết': 'Các tính chất áp dụng cho các biểu thức có nghĩa.',
					UUID: 'b14e13db-8c03-491d-9104-0a5cc3721c64',
				},
				'Luỹ thừa với số mũ hữu tỉ': {
					'Công thức': 'a^r = a^{\\frac{m}{n}} = \\sqrt[n]{a^m}',
					'Lý thuyết': 'Với số thực dương a và số hữu tỉ r = m/n (m, n ∈ ℤ, n > 0).',
					UUID: '1f883fe2-baa1-4bc5-83f2-fc20840f7926',
				},
				'Tính chất của luỹ thừa': {
					'Công thức':
						'a^{\\alpha}a^{\\beta} = a^{\\alpha+\\beta}; \\quad \\frac{a^{\\alpha}}{a^{\\beta}} = a^{\\alpha-\\beta}; \\quad (a^{\\alpha})^{\\beta} = a^{\\alpha\\beta}; \\quad (ab)^{\\alpha} = a^{\\alpha}b^{\\alpha}; \\quad (\\frac{a}{b})^{\\alpha} = \\frac{a^{\\alpha}}{b^{\\alpha}}',
					'Lý thuyết': 'Với a, b là các số thực dương và α, β là các số thực.',
					UUID: '3d28b331-8652-41ac-a61b-dd9d60976a7b',
				},
				'Định nghĩa Lôgarit': {
					'Công thức': '\\alpha = \\log_a b \\Leftrightarrow a^\\alpha = b',
					'Lý thuyết':
						'Cho hai số thực dương a, b với a ≠ 1. Số α thoả mãn đẳng thức a^α = b được gọi là lôgarit cơ số a của b.',
					UUID: '340a54d9-acd7-4608-9492-7684805def42',
				},
				'Tính chất của Lôgarit': {
					'Công thức':
						'\\log_a 1 = 0; \\quad \\log_a a = 1; \\quad \\log_a a^b = b; \\quad a^{\\log_a b} = b',
					'Lý thuyết': 'Các tính chất cơ bản của phép tính lôgarit với cơ số a dương và khác 1.',
					UUID: 'e4dd71ad-1639-4684-b2ee-05117730086a',
				},
				'Quy tắc tính Lôgarit': {
					'Công thức':
						'\\log_a(MN) = \\log_a M + \\log_a N; \\quad \\log_a(\\frac{M}{N}) = \\log_a M - \\log_a N; \\quad \\log_a(M^\\alpha) = \\alpha\\log_a M',
					'Lý thuyết': 'Các quy tắc cho lôgarit của một tích, một thương, một luỹ thừa.',
					UUID: 'ba6a6a52-4d34-4021-935d-0285d3029bca',
				},
				'Công thức đổi cơ số': {
					'Công thức': '\\log_b N = \\frac{\\log_a N}{\\log_a b}',
					'Lý thuyết': 'Cho các số dương a, b, N với a ≠ 1, b ≠ 1.',
					UUID: 'f749777e-cc9a-4486-a9e4-1ac56c1dac23',
				},
				'Hàm số mũ': {
					'Công thức': 'y = a^x \\quad (a > 0, a \\neq 1)',
					'Lý thuyết':
						'Hàm số cho tương ứng mỗi số thực x với số a^x. Tập xác định là ℝ. Tập giá trị là (0; +∞). Đồng biến trên ℝ nếu a > 1, nghịch biến trên ℝ nếu 0 < a < 1.',
					UUID: 'ce1ae761-abc7-4540-8077-07a080618774',
				},
				'Hàm số lôgarit': {
					'Công thức': 'y = \\log_a x \\quad (a > 0, a \\neq 1)',
					'Lý thuyết':
						'Hàm số cho tương ứng mỗi số thực dương x với số log_a x. Tập xác định là (0; +∞). Tập giá trị là ℝ. Đồng biến trên (0; +∞) nếu a > 1, nghịch biến trên (0; +∞) nếu 0 < a < 1.',
					UUID: '86e20fa3-a6b2-4198-95ff-38b189bd3b03',
				},
				'Phương trình mũ cơ bản': {
					'Công thức': 'a^x = b \\Leftrightarrow x = \\log_a b',
					'Lý thuyết':
						'Với a > 0, a ≠ 1. Nếu b > 0, phương trình có nghiệm duy nhất. Nếu b ≤ 0, phương trình vô nghiệm.',
					UUID: '55e1aa59-73aa-4a22-b288-be5d96f2f491',
				},
				'Phương trình lôgarit cơ bản': {
					'Công thức': '\\log_a x = b \\Leftrightarrow x = a^b',
					'Lý thuyết': 'Với a > 0, a ≠ 1, phương trình luôn có nghiệm duy nhất x = a^b.',
					UUID: '59598d15-740e-434f-9a6a-6280803aef77',
				},
				'Bất phương trình mũ': {
					'Công thức': 'a^{u(x)} > a^{v(x)}',
					'Lý thuyết':
						'Nếu a > 1, bất phương trình tương đương u(x) > v(x). Nếu 0 < a < 1, bất phương trình tương đương u(x) < v(x).',
					UUID: 'd1d9b8ce-c5bc-4cf9-8e90-b3eea1806262',
				},
				'Bất phương trình lôgarit': {
					'Công thức': '\\log_a{u(x)} > \\log_a{v(x)}',
					'Lý thuyết':
						'Nếu a > 1, bất phương trình tương đương u(x) > v(x) (kèm điều kiện xác định). Nếu 0 < a < 1, bất phương trình tương đương u(x) < v(x) (kèm điều kiện xác định).',
					UUID: 'de15700c-b6e7-41f8-88b2-021b1e12503a',
				},
			},
			'Đạo hàm': {
				'Định nghĩa đạo hàm': {
					'Công thức': "f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}",
					'Lý thuyết':
						'Đạo hàm của hàm số y = f(x) tại điểm x₀ là giới hạn (nếu có) của tỉ số giữa số gia của hàm số và số gia của đối số khi số gia của đối số tiến về 0.',
					UUID: '5a71a26d-70cb-48b1-a895-223230a6a11e',
				},
				'Phương trình tiếp tuyến': {
					'Công thức': "y = f'(x_0)(x - x_0) + y_0",
					'Lý thuyết':
						'Đạo hàm của hàm số tại điểm x₀ là hệ số góc của tiếp tuyến với đồ thị hàm số tại điểm M(x₀, y₀).',
					UUID: '27335027-4dd9-441d-adae-4e85b4c47674',
				},
				'Quy tắc tính đạo hàm': {
					'Công thức':
						"(u \\pm v)' = u' \\pm v'; \\quad (uv)' = u'v + uv'; \\quad (\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}",
					'Lý thuyết': 'Các quy tắc tính đạo hàm của tổng, hiệu, tích, thương của hai hàm số.',
					UUID: '795f5d02-b8af-4d99-9cfa-b8aac4feda81',
				},
				'Đạo hàm hàm hợp': {
					'Công thức': "(f(u(x)))' = f'(u) \\cdot u'(x)",
					'Lý thuyết':
						'Nếu hàm số u = g(x) có đạo hàm tại x và hàm số y = f(u) có đạo hàm tại u, thì hàm hợp y = f(g(x)) có đạo hàm tại x.',
					UUID: '051545ab-8957-4d61-a945-b642b4ff3f69',
				},
				'Bảng đạo hàm cơ bản': {
					'Công thức':
						"(x^n)'=nx^{n-1}; (\\sqrt{x})'=\\frac{1}{2\\sqrt{x}}; (\\sin x)'=\\cos x; (\\cos x)'=-\\sin x; (e^x)'=e^x; (a^x)'=a^x\\ln a; (\\ln x)'=\\frac{1}{x}; (\\log_a x)'=\\frac{1}{x\\ln a}",
					'Lý thuyết': 'Bảng đạo hàm của các hàm số sơ cấp thường gặp.',
					UUID: 'b6516b5d-7759-47af-bb87-acf7e4e397ab',
				},
				'Đạo hàm cấp hai': {
					'Công thức': "f''(x) = (f'(x))'",
					'Lý thuyết':
						"Đạo hàm cấp hai của hàm số y = f(x) là đạo hàm của hàm số y'. Ý nghĩa vật lý: là gia tốc tức thời của chuyển động s = f(t).",
					UUID: '1c10e303-1350-4ce2-8f23-453cdfe0018e',
				},
			},
			'Quan hệ vuông góc trong không gian': {
				'Góc giữa hai đường thẳng': {
					'Công thức': '',
					'Lý thuyết':
						"Góc giữa hai đường thẳng a và b trong không gian là góc giữa hai đường thẳng a' và b' cùng đi qua một điểm và lần lượt song song (hoặc trùng) với a và b. Góc này có số đo từ 0° đến 90°.",
					UUID: '61f7a032-4227-4881-ad2d-06f11c021815',
				},
				'Hai đường thẳng vuông góc': {
					'Công thức': 'a \\perp b',
					'Lý thuyết':
						'Hai đường thẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng 90°.',
					UUID: '19abf320-6fad-4b71-bf37-23760ee3251b',
				},
				'Đường thẳng vuông góc với mặt phẳng': {
					'Công thức': 'd \\perp (\\alpha)',
					'Lý thuyết':
						'Một đường thẳng được gọi là vuông góc với một mặt phẳng nếu nó vuông góc với mọi đường thẳng nằm trong mặt phẳng đó. Điều kiện: đường thẳng vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng.',
					UUID: '8eeaf44f-4792-451e-933c-46953e1a73ec',
				},
				'Định lí ba đường vuông góc': {
					'Công thức': '',
					'Lý thuyết':
						"Cho đường thẳng a và mặt phẳng (P) không vuông góc với nhau, và đường thẳng b nằm trong (P). Khi đó, b vuông góc với a khi và chỉ khi b vuông góc với hình chiếu vuông góc a' của a trên (P).",
					UUID: '41a010c8-1a84-4618-96a1-44873b58c84e',
				},
				'Góc giữa hai mặt phẳng': {
					'Công thức': '((\\alpha), (\\beta)) = (a,b)',
					'Lý thuyết':
						'Góc giữa hai mặt phẳng cắt nhau là góc giữa hai đường thẳng lần lượt vuông góc với giao tuyến của hai mặt phẳng đó.',
					UUID: 'c6dbd5f8-23bf-465c-8a7a-9abda2a932c3',
				},
				'Hai mặt phẳng vuông góc': {
					'Công thức': '(\\alpha) \\perp (\\beta)',
					'Lý thuyết':
						'Hai mặt phẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng 90°. Điều kiện: một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia.',
					UUID: '54f28b81-70ff-4205-86d4-92a6be210374',
				},
				'Khoảng cách': {
					'Công thức': 'd(M, a); d(M, (P)); d(a, (P)); d((P), (Q)); d(a, b)',
					'Lý thuyết':
						'Định nghĩa các loại khoảng cách: từ điểm đến đường thẳng/mặt phẳng, giữa đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song, giữa hai đường thẳng chéo nhau (là độ dài đoạn vuông góc chung).',
					UUID: 'b38a7c1f-9420-4d84-bd50-aa211645c63d',
				},
				'Thể tích khối hộp chữ nhật': {
					'Công thức': 'V = abc',
					'Lý thuyết': 'Thể tích bằng tích ba kích thước.',
					UUID: '45d3dd41-916f-48d6-937c-65413c9c9624',
				},
				'Thể tích khối lăng trụ': {
					'Công thức': 'V = S_{đáy} \\cdot h',
					'Lý thuyết': 'Thể tích bằng diện tích đáy nhân với chiều cao.',
					UUID: '79bd9423-5fd0-4674-b8c4-7e641e0315d3',
				},
				'Thể tích khối chóp': {
					'Công thức': 'V = \\frac{1}{3}S_{đáy} \\cdot h',
					'Lý thuyết': 'Thể tích bằng một phần ba diện tích đáy nhân với chiều cao.',
					UUID: '3fe9f260-8e40-477b-9b42-3ec2b2719622',
				},
				'Góc giữa đường thẳng và mặt phẳng': {
					'Công thức': '',
					'Lý thuyết':
						'Nếu đường thẳng không vuông góc với mặt phẳng, góc giữa chúng là góc giữa đường thẳng và hình chiếu vuông góc của nó trên mặt phẳng.',
					UUID: '6fc586d6-a9a7-49ad-b596-ef5f81c76660',
				},
				'Góc nhị diện': {
					'Công thức': '',
					'Lý thuyết':
						'Góc phẳng nhị diện là góc có đỉnh nằm trên cạnh của nhị diện, có hai cạnh lần lượt nằm trên hai mặt của nhị diện và vuông góc với cạnh của nhị diện.',
					UUID: 'affc9d8a-48dd-4cc8-8781-ef1de9ff6a7b',
				},
			},
			'Xác suất': {
				'Biến cố giao': {
					'Công thức': 'A \\cap B',
					'Lý thuyết':
						"Là biến cố 'Cả A và B cùng xảy ra'. Tập hợp mô tả biến cố AB là giao của hai tập hợp A và B.",
					UUID: '051cbedd-ef7b-4f86-a981-0a2ddb8d2fd7',
				},
				'Biến cố xung khắc': {
					'Công thức': 'A \\cap B = \\emptyset',
					'Lý thuyết':
						'Hai biến cố A và B được gọi là xung khắc nếu chúng không thể đồng thời xảy ra.',
					UUID: '5195b0bf-913f-40ce-96b6-38990c204254',
				},
				'Biến cố độc lập': {
					'Công thức': '',
					'Lý thuyết':
						'Hai biến cố A và B được gọi là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng tới xác suất xảy ra của biến cố kia.',
					UUID: 'a4360b31-86fb-412f-a10e-3a03e61443fe',
				},
				'Quy tắc nhân xác suất': {
					'Công thức': 'P(AB) = P(A)P(B)',
					'Lý thuyết':
						'Nếu hai biến cố A và B độc lập với nhau thì xác suất của biến cố giao bằng tích các xác suất của chúng.',
					UUID: 'e2b42610-b168-494e-9bd4-4ba28e69fdbd',
				},
				'Biến cố hợp': {
					'Công thức': 'A \\cup B',
					'Lý thuyết':
						"Là biến cố 'A hoặc B xảy ra'. Tập hợp mô tả biến cố A ∪ B là hợp của hai tập hợp A và B.",
					UUID: 'bd69b5d8-3c41-481d-a635-22a323c41619',
				},
				'Quy tắc cộng xác suất': {
					'Công thức': 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
					'Lý thuyết':
						'Công thức tính xác suất của biến cố hợp cho hai biến cố bất kì. Nếu A và B xung khắc, P(A ∪ B) = P(A) + P(B).',
					UUID: '28d12463-a060-474b-9a3b-5a3851dc3db6',
				},
			},
		},
		12: {
			'Hàm số mũ và Hàm số Lôgarit': {
				'Luỹ thừa với số mũ nguyên': {
					'Công thức': 'a^{-n} = \\frac{1}{a^n} \\quad (a \\neq 0)',
					'Lý thuyết':
						'Luỹ thừa của một số thực a với số mũ nguyên n được định nghĩa. Với n là số nguyên âm, a^{-n} là nghịch đảo của a^n.',
					UUID: 'f32d04e3-455b-4346-9fca-c88e07f6e85a',
				},
				'Căn bậc n': {
					'Công thức': '\\sqrt[n]{b} = a \\Leftrightarrow a^n = b',
					'Lý thuyết':
						'Với số nguyên dương n ≥ 2 và số thực b, số a được gọi là căn bậc n của b nếu a^n = b. Nếu n lẻ, có duy nhất một căn bậc n. Nếu n chẵn và b > 0, có hai căn bậc n đối nhau.',
					UUID: '756acc86-f067-4f3e-96c3-d34e89a830f4',
				},
				'Tính chất của căn bậc n': {
					'Công thức':
						'\\sqrt[n]{ab} = \\sqrt[n]{a}\\sqrt[n]{b}; \\quad \\sqrt[n]{\\frac{a}{b}} = \\frac{\\sqrt[n]{a}}{\\sqrt[n]{b}}; \\quad (\\sqrt[n]{a})^m = \\sqrt[n]{a^m}',
					'Lý thuyết': 'Các tính chất áp dụng cho các biểu thức có nghĩa.',
					UUID: 'bd518155-9196-4f6d-a5c7-c5ca50590d1a',
				},
				'Luỹ thừa với số mũ hữu tỉ': {
					'Công thức': 'a^r = a^{\\frac{m}{n}} = \\sqrt[n]{a^m}',
					'Lý thuyết': 'Với số thực dương a và số hữu tỉ r = m/n (m, n ∈ ℤ, n > 0).',
					UUID: '97391653-de82-40fc-a27d-d18d36ea6927',
				},
				'Tính chất của luỹ thừa': {
					'Công thức':
						'a^{\\alpha}a^{\\beta} = a^{\\alpha+\\beta}; \\quad \\frac{a^{\\alpha}}{a^{\\beta}} = a^{\\alpha-\\beta}; \\quad (a^{\\alpha})^{\\beta} = a^{\\alpha\\beta}; \\quad (ab)^{\\alpha} = a^{\\alpha}b^{\\alpha}; \\quad (\\frac{a}{b})^{\\alpha} = \\frac{a^{\\alpha}}{b^{\\alpha}}',
					'Lý thuyết': 'Với a, b là các số thực dương và α, β là các số thực.',
					UUID: 'c5562531-4f79-484e-9831-2b235ba58753',
				},
				'Định nghĩa Lôgarit': {
					'Công thức': '\\alpha = \\log_a b \\Leftrightarrow a^\\alpha = b',
					'Lý thuyết':
						'Cho hai số thực dương a, b với a ≠ 1. Số α thoả mãn đẳng thức a^α = b được gọi là lôgarit cơ số a của b.',
					UUID: '0779e640-68b3-42c8-b000-83cf53b50d38',
				},
				'Tính chất của Lôgarit': {
					'Công thức':
						'\\log_a 1 = 0; \\quad \\log_a a = 1; \\quad \\log_a a^b = b; \\quad a^{\\log_a b} = b',
					'Lý thuyết': 'Các tính chất cơ bản của phép tính lôgarit với cơ số a dương và khác 1.',
					UUID: '6f42605d-871c-480d-a7cd-ba2a603c514f',
				},
				'Quy tắc tính Lôgarit': {
					'Công thức':
						'\\log_a(MN) = \\log_a M + \\log_a N; \\quad \\log_a(\\frac{M}{N}) = \\log_a M - \\log_a N; \\quad \\log_a(M^\\alpha) = \\alpha\\log_a M',
					'Lý thuyết': 'Các quy tắc cho lôgarit của một tích, một thương, một luỹ thừa.',
					UUID: '1e8e412a-6187-4060-8abe-a69b6357959b',
				},
				'Công thức đổi cơ số': {
					'Công thức': '\\log_b N = \\frac{\\log_a N}{\\log_a b}',
					'Lý thuyết': 'Cho các số dương a, b, N với a ≠ 1, b ≠ 1.',
					UUID: 'cdc3d065-ebed-4b6c-ae0a-df08ab46ae75',
				},
				'Hàm số mũ': {
					'Công thức': 'y = a^x \\quad (a > 0, a \\neq 1)',
					'Lý thuyết':
						'Hàm số cho tương ứng mỗi số thực x với số a^x. Tập xác định là ℝ. Tập giá trị là (0; +∞). Đồng biến trên ℝ nếu a > 1, nghịch biến trên ℝ nếu 0 < a < 1.',
					UUID: '36c50b51-6284-4ba6-b5d2-e6f2bffbef9b',
				},
				'Hàm số lôgarit': {
					'Công thức': 'y = \\log_a x \\quad (a > 0, a \\neq 1)',
					'Lý thuyết':
						'Hàm số cho tương ứng mỗi số thực dương x với số log_a x. Tập xác định là (0; +∞). Tập giá trị là ℝ. Đồng biến trên (0; +∞) nếu a > 1, nghịch biến trên (0; +∞) nếu 0 < a < 1.',
					UUID: 'e6c0b352-4d7d-4587-a40c-6db8cb102981',
				},
				'Phương trình mũ cơ bản': {
					'Công thức': 'a^x = b \\Leftrightarrow x = \\log_a b',
					'Lý thuyết':
						'Với a > 0, a ≠ 1. Nếu b > 0, phương trình có nghiệm duy nhất. Nếu b ≤ 0, phương trình vô nghiệm.',
					UUID: '1eb0e05d-3483-4b97-99c4-dd4a96b97bf0',
				},
				'Phương trình lôgarit cơ bản': {
					'Công thức': '\\log_a x = b \\Leftrightarrow x = a^b',
					'Lý thuyết': 'Với a > 0, a ≠ 1, phương trình luôn có nghiệm duy nhất x = a^b.',
					UUID: 'bb6c7fb6-9594-40a3-bd64-9e9860d38cdb',
				},
				'Bất phương trình mũ': {
					'Công thức': 'a^{u(x)} > a^{v(x)}',
					'Lý thuyết':
						'Nếu a > 1, bất phương trình tương đương u(x) > v(x). Nếu 0 < a < 1, bất phương trình tương đương u(x) < v(x).',
					UUID: 'a60c8237-18e6-45fe-953c-2c14155803f9',
				},
				'Bất phương trình lôgarit': {
					'Công thức': '\\log_a{u(x)} > \\log_a{v(x)}',
					'Lý thuyết':
						'Nếu a > 1, bất phương trình tương đương u(x) > v(x) (kèm điều kiện xác định). Nếu 0 < a < 1, bất phương trình tương đương u(x) < v(x) (kèm điều kiện xác định).',
					UUID: '1b61abaf-3044-4663-85d9-30092e999008',
				},
			},
			'Đạo hàm': {
				'Định nghĩa đạo hàm': {
					'Công thức': "f'(x_0) = \\lim_{x \\to x_0} \\frac{f(x) - f(x_0)}{x - x_0}",
					'Lý thuyết':
						'Đạo hàm của hàm số y = f(x) tại điểm x₀ là giới hạn (nếu có) của tỉ số giữa số gia của hàm số và số gia của đối số khi số gia của đối số tiến về 0.',
					UUID: '3ceb3263-706c-48db-8343-8cb8b1552af0',
				},
				'Phương trình tiếp tuyến': {
					'Công thức': "y = f'(x_0)(x - x_0) + y_0",
					'Lý thuyết':
						'Đạo hàm của hàm số tại điểm x₀ là hệ số góc của tiếp tuyến với đồ thị hàm số tại điểm M(x₀, y₀).',
					UUID: '38f4acc7-5111-4355-8fea-abe492d91b78',
				},
				'Quy tắc tính đạo hàm': {
					'Công thức':
						"(u \\pm v)' = u' \\pm v'; \\quad (uv)' = u'v + uv'; \\quad (\\frac{u}{v})' = \\frac{u'v - uv'}{v^2}",
					'Lý thuyết': 'Các quy tắc tính đạo hàm của tổng, hiệu, tích, thương của hai hàm số.',
					UUID: '5bb7ee0a-b70a-4824-ab18-256f02f7f46d',
				},
				'Đạo hàm hàm hợp': {
					'Công thức': "(f(u(x)))' = f'(u) \\cdot u'(x)",
					'Lý thuyết':
						'Nếu hàm số u = g(x) có đạo hàm tại x và hàm số y = f(u) có đạo hàm tại u, thì hàm hợp y = f(g(x)) có đạo hàm tại x.',
					UUID: 'd3788733-0a1d-4522-ab5c-91fb3b5b3363',
				},
				'Bảng đạo hàm cơ bản': {
					'Công thức':
						"(x^n)'=nx^{n-1}; (\\sqrt{x})'=\\frac{1}{2\\sqrt{x}}; (\\sin x)'=\\cos x; (\\cos x)'=-\\sin x; (e^x)'=e^x; (a^x)'=a^x\\ln a; (\\ln x)'=\\frac{1}{x}; (\\log_a x)'=\\frac{1}{x\\ln a}",
					'Lý thuyết': 'Bảng đạo hàm của các hàm số sơ cấp thường gặp.',
					UUID: '94df7b24-8eea-47d5-9c03-3468af10ed3d',
				},
				'Đạo hàm cấp hai': {
					'Công thức': "f''(x) = (f'(x))'",
					'Lý thuyết':
						"Đạo hàm cấp hai của hàm số y = f(x) là đạo hàm của hàm số y'. Ý nghĩa vật lý: là gia tốc tức thời của chuyển động s = f(t).",
					UUID: '5f6c159b-d145-43f6-ac46-ea21aa9673c5',
				},
			},
			'Quan hệ vuông góc trong không gian': {
				'Góc giữa hai đường thẳng': {
					'Công thức': '',
					'Lý thuyết':
						"Góc giữa hai đường thẳng a và b trong không gian là góc giữa hai đường thẳng a' và b' cùng đi qua một điểm và lần lượt song song (hoặc trùng) với a và b. Góc này có số đo từ 0° đến 90°.",
					UUID: '6258b232-5fb1-45e7-96f0-68043c1689eb',
				},
				'Hai đường thẳng vuông góc': {
					'Công thức': 'a \\perp b',
					'Lý thuyết':
						'Hai đường thẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng 90°.',
					UUID: '4e88ad0c-7deb-4eab-a076-6d1d80b65672',
				},
				'Đường thẳng vuông góc với mặt phẳng': {
					'Công thức': 'd \\perp (\\alpha)',
					'Lý thuyết':
						'Một đường thẳng được gọi là vuông góc với một mặt phẳng nếu nó vuông góc với mọi đường thẳng nằm trong mặt phẳng đó. Điều kiện: đường thẳng vuông góc với hai đường thẳng cắt nhau nằm trong mặt phẳng.',
					UUID: '29d8614e-a518-4d5b-a295-551ba7bb49db',
				},
				'Định lí ba đường vuông góc': {
					'Công thức': '',
					'Lý thuyết':
						"Cho đường thẳng a và mặt phẳng (P) không vuông góc với nhau, và đường thẳng b nằm trong (P). Khi đó, b vuông góc với a khi và chỉ khi b vuông góc với hình chiếu vuông góc a' của a trên (P).",
					UUID: 'eb3efd0a-52bd-4ec0-a1a9-913b54aa31e0',
				},
				'Góc giữa hai mặt phẳng': {
					'Công thức': '((\\alpha), (\\beta)) = (a,b)',
					'Lý thuyết':
						'Góc giữa hai mặt phẳng cắt nhau là góc giữa hai đường thẳng lần lượt vuông góc với giao tuyến của hai mặt phẳng đó.',
					UUID: '8beccd34-28a6-4376-9927-1e05a64f3a28',
				},
				'Hai mặt phẳng vuông góc': {
					'Công thức': '(\\alpha) \\perp (\\beta)',
					'Lý thuyết':
						'Hai mặt phẳng được gọi là vuông góc với nhau nếu góc giữa chúng bằng 90°. Điều kiện: một mặt phẳng chứa một đường thẳng vuông góc với mặt phẳng kia.',
					UUID: '03657fcc-731b-4ec9-b985-ec968b43cffb',
				},
				'Khoảng cách': {
					'Công thức': 'd(M, a); d(M, (P)); d(a, (P)); d((P), (Q)); d(a, b)',
					'Lý thuyết':
						'Định nghĩa các loại khoảng cách: từ điểm đến đường thẳng/mặt phẳng, giữa đường thẳng và mặt phẳng song song, giữa hai mặt phẳng song song, giữa hai đường thẳng chéo nhau (là độ dài đoạn vuông góc chung).',
					UUID: 'c1474dae-cf87-4f29-b463-d8fc72908cb3',
				},
				'Thể tích khối hộp chữ nhật': {
					'Công thức': 'V = abc',
					'Lý thuyết': 'Thể tích bằng tích ba kích thước.',
					UUID: 'd6d2e142-bcc8-4149-b3b0-c7f470d09ee2',
				},
				'Thể tích khối lăng trụ': {
					'Công thức': 'V = S_{đáy} \\cdot h',
					'Lý thuyết': 'Thể tích bằng diện tích đáy nhân với chiều cao.',
					UUID: '5c3ce762-ce89-4ff0-8130-56f492563b3e',
				},
				'Thể tích khối chóp': {
					'Công thức': 'V = \\frac{1}{3}S_{đáy} \\cdot h',
					'Lý thuyết': 'Thể tích bằng một phần ba diện tích đáy nhân với chiều cao.',
					UUID: '36122ae8-a4bb-4f7f-80b7-5bd38536ce1f',
				},
				'Góc giữa đường thẳng và mặt phẳng': {
					'Công thức': '',
					'Lý thuyết':
						'Nếu đường thẳng không vuông góc với mặt phẳng, góc giữa chúng là góc giữa đường thẳng và hình chiếu vuông góc của nó trên mặt phẳng.',
					UUID: '862194f0-329c-42e9-a402-3f5ebf636b7e',
				},
				'Góc nhị diện': {
					'Công thức': '',
					'Lý thuyết':
						'Góc phẳng nhị diện là góc có đỉnh nằm trên cạnh của nhị diện, có hai cạnh lần lượt nằm trên hai mặt của nhị diện và vuông góc với cạnh của nhị diện.',
					UUID: '8ee908f3-a7c0-4d7b-ac72-9af74d02e2df',
				},
			},
			'Xác suất': {
				'Biến cố giao': {
					'Công thức': 'A \\cap B',
					'Lý thuyết':
						"Là biến cố 'Cả A và B cùng xảy ra'. Tập hợp mô tả biến cố AB là giao của hai tập hợp A và B.",
					UUID: '6a227115-b2ea-40b6-81d6-9bdc7ba8617d',
				},
				'Biến cố xung khắc': {
					'Công thức': 'A \\cap B = \\emptyset',
					'Lý thuyết':
						'Hai biến cố A và B được gọi là xung khắc nếu chúng không thể đồng thời xảy ra.',
					UUID: '24837529-c724-46c8-b7e7-c415c27bb67b',
				},
				'Biến cố độc lập': {
					'Công thức': '',
					'Lý thuyết':
						'Hai biến cố A và B được gọi là độc lập nếu việc xảy ra hay không xảy ra của biến cố này không làm ảnh hưởng tới xác suất xảy ra của biến cố kia.',
					UUID: 'd3579b24-9c03-4b79-b680-2aafc5fadade',
				},
				'Quy tắc nhân xác suất': {
					'Công thức': 'P(AB) = P(A)P(B)',
					'Lý thuyết':
						'Nếu hai biến cố A và B độc lập với nhau thì xác suất của biến cố giao bằng tích các xác suất của chúng.',
					UUID: '454de3b1-e0bf-4c50-ad33-a717f68172cb',
				},
				'Biến cố hợp': {
					'Công thức': 'A \\cup B',
					'Lý thuyết':
						"Là biến cố 'A hoặc B xảy ra'. Tập hợp mô tả biến cố A ∪ B là hợp của hai tập hợp A và B.",
					UUID: '48b35144-4de3-488c-9389-953a09cc524e',
				},
				'Quy tắc cộng xác suất': {
					'Công thức': 'P(A \\cup B) = P(A) + P(B) - P(A \\cap B)',
					'Lý thuyết':
						'Công thức tính xác suất của biến cố hợp cho hai biến cố bất kì. Nếu A và B xung khắc, P(A ∪ B) = P(A) + P(B).',
					UUID: 'c560b913-b94b-4b2f-8d65-edfb1f5d194e',
				},
			},
			'Nguyên hàm và Tích phân': {
				'Nguyên hàm': {
					'Công thức': '\\int f(x)dx = F(x) + C',
					'Lý thuyết':
						"Hàm số F(x) được gọi là nguyên hàm của hàm số f(x) trên K nếu F'(x) = f(x) với mọi x thuộc K. Nếu F(x) là một nguyên hàm thì họ tất cả các nguyên hàm của f(x) là F(x) + C, với C là hằng số.",
					UUID: '801050b8-5695-4784-b31b-5793758cb0e7',
				},
				'Tính chất của nguyên hàm': {
					'Công thức':
						'\\int kf(x)dx = k\\int f(x)dx; \\quad \\int [f(x) \\pm g(x)]dx = \\int f(x)dx \\pm \\int g(x)dx',
					'Lý thuyết':
						'Nguyên hàm của một tích của hằng số với hàm số bằng tích của hằng số với nguyên hàm của hàm số đó. Nguyên hàm của một tổng hoặc hiệu bằng tổng hoặc hiệu các nguyên hàm.',
					UUID: '98a3cad1-6a35-42bd-b2e2-ca6bd587380c',
				},
				'Bảng nguyên hàm cơ bản': {
					'Công thức':
						'\\int x^\\alpha dx = \\frac{x^{\\alpha+1}}{\\alpha+1} + C (\\alpha \\neq -1); \\quad \\int \\frac{1}{x}dx = \\ln|x| + C; \\quad \\int e^x dx = e^x + C; \\quad \\int a^x dx = \\frac{a^x}{\\ln a} + C; \\quad \\int \\cos x dx = \\sin x + C; \\quad \\int \\sin x dx = -\\cos x + C',
					'Lý thuyết': 'Bảng nguyên hàm của các hàm số sơ cấp thường gặp.',
					UUID: '586833fa-8ec8-4e78-9aae-f75787a19e40',
				},
				'Tích phân xác định': {
					'Công thức': '\\int_a^b f(x)dx = F(b) - F(a)',
					'Lý thuyết':
						'Nếu f(x) liên tục trên đoạn [a, b] và F(x) là một nguyên hàm của f(x) trên đoạn đó, thì hiệu số F(b) - F(a) được gọi là tích phân từ a đến b của f(x).',
					UUID: 'd5e2f201-ef54-41a5-934e-eea100aa3285',
				},
				'Tính chất của tích phân': {
					'Công thức':
						'\\int_a^b kf(x)dx = k\\int_a^b f(x)dx; \\quad \\int_a^b [f(x) \\pm g(x)]dx = \\int_a^b f(x)dx \\pm \\int_a^b g(x)dx; \\quad \\int_a^b f(x)dx = \\int_a^c f(x)dx + \\int_c^b f(x)dx',
					'Lý thuyết':
						'Các tính chất tuyến tính và tính chất cộng của tích phân trên các đoạn liền kề.',
					UUID: 'eea98c9d-81a0-4938-a67d-3616b3746ac2',
				},
				'Diện tích hình phẳng giới hạn bởi một đường cong': {
					'Công thức': 'S = \\int_a^b |f(x)|dx',
					'Lý thuyết':
						'Diện tích hình phẳng giới hạn bởi đồ thị hàm số y = f(x), trục hoành, và hai đường thẳng x = a, x = b.',
					UUID: '8ff6f751-87f9-43e3-a399-a6129b32e92e',
				},
				'Diện tích hình phẳng giới hạn bởi hai đường cong': {
					'Công thức': 'S = \\int_a^b |f_1(x) - f_2(x)|dx',
					'Lý thuyết':
						'Diện tích hình phẳng giới hạn bởi đồ thị hai hàm số y = f₁(x), y = f₂(x) và hai đường thẳng x = a, x = b.',
					UUID: 'badd5551-4628-4ff3-9a57-23809e30e113',
				},
				'Thể tích khối tròn xoay': {
					'Công thức': 'V = \\pi \\int_a^b [f(x)]^2 dx',
					'Lý thuyết':
						'Thể tích của khối tròn xoay tạo thành khi quay hình phẳng giới hạn bởi y = f(x), trục hoành, x = a, x = b xung quanh trục Ox.',
					UUID: '3be7ca09-9855-452b-acf6-dd312a55a601',
				},
			},
			'Phương trình trong không gian': {
				'Phương trình tổng quát của mặt phẳng': {
					'Công thức': 'Ax + By + Cz + D = 0',
					'Lý thuyết':
						'Một mặt phẳng trong không gian Oxyz có phương trình tổng quát như trên, với A, B, C không đồng thời bằng 0. Vectơ n=(A; B; C) là một vectơ pháp tuyến của mặt phẳng.',
					UUID: '6f502804-e56b-4368-98af-9f603a9340a2',
				},
				'Phương trình mặt phẳng theo đoạn chắn': {
					'Công thức': '\\frac{x}{a} + \\frac{y}{b} + \\frac{z}{c} = 1',
					'Lý thuyết':
						'Phương trình mặt phẳng đi qua ba điểm A(a,0,0), B(0,b,0), C(0,0,c) với a, b, c khác 0.',
					UUID: 'bed8cb1f-20ec-41dd-b15f-f496dce66f07',
				},
				'Phương trình tham số của đường thẳng': {
					'Công thức':
						'\\begin{cases} x = x_0 + a_1t \\\\ y = y_0 + a_2t \\\\ z = z_0 + a_3t \\end{cases}',
					'Lý thuyết':
						'Phương trình đường thẳng đi qua điểm M₀(x₀, y₀, z₀) và có vectơ chỉ phương u=(a₁, a₂, a₃).',
					UUID: '75d2884b-807d-4b8f-995f-e218b33be6e4',
				},
				'Phương trình chính tắc của đường thẳng': {
					'Công thức': '\\frac{x-x_0}{a_1} = \\frac{y-y_0}{a_2} = \\frac{z-z_0}{a_3}',
					'Lý thuyết':
						'Dạng phương trình của đường thẳng khi các thành phần của vectơ chỉ phương đều khác 0.',
					UUID: '5284f3b4-8e52-4f5b-ba36-c527397ba35f',
				},
				'Phương trình mặt cầu': {
					'Công thức': '(x-a)^2 + (y-b)^2 + (z-c)^2 = R^2',
					'Lý thuyết': 'Phương trình mặt cầu có tâm I(a, b, c) và bán kính R.',
					UUID: '1520c286-4a57-4a46-ab20-a2c5f780249f',
				},
				'Góc giữa hai mặt phẳng': {
					'Công thức':
						'\\cos(\\alpha, \\beta) = |\\cos(\\vec{n_1}, \\vec{n_2})| = \\frac{|A_1A_2 + B_1B_2 + C_1C_2|}{\\sqrt{A_1^2+B_1^2+C_1^2}\\sqrt{A_2^2+B_2^2+C_2^2}}',
					'Lý thuyết':
						'Góc giữa hai mặt phẳng là góc giữa hai vectơ pháp tuyến tương ứng của chúng.',
					UUID: 'c561b9b8-816a-4fc1-aeb6-13212b6d861f',
				},
				'Góc giữa đường thẳng và mặt phẳng': {
					'Công thức':
						'\\sin(d, (P)) = |\\cos(\\vec{a}, \\vec{n})| = \\frac{|a_1A + a_2B + a_3C|}{\\sqrt{a_1^2+a_2^2+a_3^2}\\sqrt{A^2+B^2+C^2}}',
					'Lý thuyết':
						'Góc giữa một đường thẳng và một mặt phẳng được tính thông qua sin của góc đó, bằng cosin của góc giữa vectơ chỉ phương của đường thẳng và vectơ pháp tuyến của mặt phẳng.',
					UUID: 'd6e4ca00-5970-4329-9119-d31d59e8a6bd',
				},
				'Khoảng cách từ điểm đến mặt phẳng': {
					'Công thức': 'd(M_0, (P)) = \\frac{|Ax_0+By_0+Cz_0+D|}{\\sqrt{A^2+B^2+C^2}}',
					'Lý thuyết':
						'Khoảng cách từ điểm M₀(x₀, y₀, z₀) đến mặt phẳng (P) có phương trình Ax + By + Cz + D = 0.',
					UUID: 'a7312bfb-fa46-42a7-a5da-2251cb3aa57a',
				},
			},
			'Xác suất có điều kiện': {
				'Xác suất có điều kiện': {
					'Công thức': 'P(A|B) = \\frac{P(AB)}{P(B)}',
					'Lý thuyết':
						'Xác suất của biến cố A với điều kiện biến cố B đã xảy ra, trong đó P(B) > 0.',
					UUID: '2d4b49bc-7c00-4b40-9180-a00543c97318',
				},
				'Công thức nhân xác suất': {
					'Công thức': 'P(AB) = P(A)P(B|A) = P(B)P(A|B)',
					'Lý thuyết':
						'Công thức tính xác suất của giao hai biến cố. Nếu A và B độc lập, P(AB) = P(A)P(B).',
					UUID: 'a8bb8fff-ffd5-45e5-8afb-b6ad05990a99',
				},
				'Công thức xác suất toàn phần': {
					'Công thức': 'P(A) = P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})',
					'Lý thuyết':
						'Công thức tính xác suất của một biến cố A thông qua một hệ đầy đủ các biến cố (ở đây là B và B-ngang).',
					UUID: '7a518c69-9ead-48da-a2ff-0c46e48273f4',
				},
				'Công thức Bayes': {
					'Công thức':
						'P(B|A) = \\frac{P(B)P(A|B)}{P(A)} = \\frac{P(B)P(A|B)}{P(B)P(A|B) + P(\\bar{B})P(A|\\bar{B})}',
					'Lý thuyết':
						'Công thức cho phép tính xác suất hậu nghiệm của một biến cố, dựa trên xác suất tiền nghiệm và các xác suất có điều kiện liên quan.',
					UUID: '49b7a21c-b04d-4c3d-87b6-ccc546805dae',
				},
			},
		},
	},
	ly: {
		10: {
			'Đơn vị và Sai số': {
				'Hệ đơn vị SI': {
					'Công thức': '',
					'Lý thuyết':
						'Hệ đơn vị đo lường quốc tế (SI) được xây dựng trên cơ sở 7 đơn vị cơ bản, bao gồm: mét (m) cho chiều dài, kilôgam (kg) cho khối lượng, giây (s) cho thời gian, kelvin (K) cho nhiệt độ, ampe (A) cho cường độ dòng điện, mol (mol) cho lượng chất, và candela (cd) cho cường độ sáng.',
					UUID: '03a2ec31-eea0-423e-afc4-5477b8bf4053',
				},
				'Sai số phép đo': {
					'Công thức': '',
					'Lý thuyết':
						'Sai số của phép đo là độ lệch giữa giá trị đo được và giá trị thực của đại lượng cần đo. Bao gồm sai số hệ thống (do dụng cụ hoặc phương pháp) và sai số ngẫu nhiên (do các yếu tố ngẫu nhiên không kiểm soát được).',
					UUID: 'f1bd2d14-a5b6-43f7-a094-2ab919c70a15',
				},
				'Giá trị trung bình': {
					'Công thức': '\\bar{A} = \\frac{A_1 + A_2 + ... + A_n}{n}',
					'Lý thuyết':
						'Giá trị trung bình của một đại lượng được tính bằng tổng các giá trị đo được chia cho số lần đo.',
					UUID: '1df80717-99fd-4b0a-9705-ee5e55fc47b6',
				},
				'Sai số tuyệt đối': {
					'Công thức': '\\Delta A_i = |\\bar{A} - A_i|',
					'Lý thuyết':
						'Sai số tuyệt đối ứng với mỗi lần đo là giá trị tuyệt đối của hiệu giữa giá trị trung bình và giá trị của lần đo đó.',
					UUID: '58cdf162-ff04-455c-a15b-7f50efcf0721',
				},
				'Sai số tuyệt đối của phép đo': {
					'Công thức': '\\Delta A = \\overline{\\Delta A} + \\Delta A_{dc}',
					'Lý thuyết':
						'Sai số tuyệt đối của phép đo được xác định bằng tổng sai số ngẫu nhiên trung bình và sai số của dụng cụ đo.',
					UUID: '34a7b2a4-5b33-4188-bf78-31a1c1200c8b',
				},
				'Sai số tương đối (tỉ đối)': {
					'Công thức': '\\delta A = \\frac{\\Delta A}{\\bar{A}} \\cdot 100\\%',
					'Lý thuyết':
						'Sai số tương đối là tỉ số phần trăm giữa sai số tuyệt đối và giá trị trung bình của đại lượng đo, cho biết mức độ chính xác của phép đo.',
					UUID: 'e681f51a-eaf9-4e55-b6ff-e5b26d826fd2',
				},
				'Cách viết kết quả đo': {
					'Công thức': 'A = \\bar{A} \\pm \\Delta A',
					'Lý thuyết':
						'Kết quả đo một đại lượng A được biểu diễn dưới dạng giá trị trung bình cộng hoặc trừ đi sai số tuyệt đối của phép đo.',
					UUID: '9c79fe5c-e9ba-4f34-95da-292d068b1c86',
				},
			},
			'Động học': {
				'Độ dịch chuyển và Quãng đường': {
					'Công thức': 'd = x_f - x_i',
					'Lý thuyết':
						'Độ dịch chuyển là một đại lượng vector, cho biết sự thay đổi vị trí của vật. Quãng đường là đại lượng vô hướng, là tổng chiều dài quỹ đạo vật đi được.',
					UUID: '34c642f8-9a05-4fc3-a6a4-ca3cc1766f71',
				},
				'Tốc độ trung bình': {
					'Công thức': 'v_{tb} = \\frac{s}{t}',
					'Lý thuyết':
						'Tốc độ trung bình được tính bằng quãng đường đi được chia cho khoảng thời gian đi hết quãng đường đó.',
					UUID: '906103f0-002c-466c-a554-a3c58cf73401',
				},
				'Vận tốc trung bình': {
					'Công thức': '\\vec{v}_{tb} = \\frac{\\vec{d}}{\\Delta t}',
					'Lý thuyết':
						'Vận tốc trung bình là một đại lượng vector, được xác định bằng độ dịch chuyển chia cho khoảng thời gian thực hiện độ dịch chuyển đó.',
					UUID: 'f6b1ed72-b6a5-480c-b246-196ce70af996',
				},
				'Công thức cộng vận tốc': {
					'Công thức': '\\vec{v}_{1,3} = \\vec{v}_{1,2} + \\vec{v}_{2,3}',
					'Lý thuyết':
						'Vận tốc tuyệt đối (của vật 1 so với hệ quy chiếu đứng yên 3) bằng tổng vector của vận tốc tương đối (vật 1 so với hệ quy chiếu chuyển động 2) và vận tốc kéo theo (hệ 2 so với hệ 3).',
					UUID: '3812bbfd-f310-4dc8-8cf7-706fec4a8e20',
				},
				'Gia tốc': {
					'Công thức': '\\vec{a} = \\frac{\\Delta \\vec{v}}{\\Delta t}',
					'Lý thuyết':
						'Gia tốc là đại lượng vector, đặc trưng cho sự thay đổi (nhanh hay chậm) của vận tốc theo thời gian.',
					UUID: '567e2876-9b3e-415c-bbf0-1647b244c363',
				},
				'Chuyển động thẳng biến đổi đều': {
					'Công thức': 'v = v_0 + at; \\quad d = v_0t + \\frac{1}{2}at^2; \\quad v^2 - v_0^2 = 2ad',
					'Lý thuyết':
						'Là chuyển động thẳng trong đó gia tốc không đổi theo thời gian. Nếu a>0 là chuyển động nhanh dần đều, a<0 là chuyển động chậm dần đều (với chiều dương là chiều chuyển động).',
					UUID: '36943a82-613f-4369-9702-705bf7ea5aac',
				},
				'Sự rơi tự do': {
					'Công thức': 'v = gt; \\quad h = \\frac{1}{2}gt^2; \\quad v^2 = 2gh',
					'Lý thuyết':
						'Sự rơi tự do là chuyển động của một vật chỉ dưới tác dụng của trọng lực, là một trường hợp đặc biệt của chuyển động thẳng nhanh dần đều với gia tốc là gia tốc trọng trường g.',
					UUID: '73bb5205-01dd-4918-a9e4-a8483d7f436b',
				},
				'Chuyển động ném ngang': {
					'Công thức':
						'y = \\frac{g}{2v_0^2}x^2; \\quad t_{bay} = \\sqrt{\\frac{2h}{g}}; \\quad L_{max} = v_0 \\sqrt{\\frac{2h}{g}}',
					'Lý thuyết':
						'Là chuyển động có quỹ đạo dạng parabol, được phân tích thành hai chuyển động thành phần: chuyển động thẳng đều theo phương ngang và rơi tự do theo phương thẳng đứng.',
					UUID: '0fc3ccb2-e258-45a8-bb1a-ec230fbbef32',
				},
				'Chuyển động tròn đều': {
					'Công thức': 'v = \\omega R; \\quad a_{ht} = \\frac{v^2}{R} = \\omega^2 R',
					'Lý thuyết':
						'Là chuyển động có quỹ đạo tròn và tốc độ dài không đổi. Tốc độ góc (ω) và tốc độ dài (v) liên hệ với nhau qua bán kính R. Gia tốc hướng tâm (a_ht) luôn hướng vào tâm quỹ đạo.',
					UUID: 'ad9067d1-998d-4a98-908f-feaaf7c3eb9f',
				},
			},
			'Động lực học': {
				'Định luật I Newton': {
					'Công thức': '\\sum \\vec{F} = 0 \\Rightarrow \\vec{a} = 0',
					'Lý thuyết':
						'Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không, thì vật đang đứng yên sẽ tiếp tục đứng yên, vật đang chuyển động sẽ tiếp tục chuyển động thẳng đều. Đây là định luật về quán tính.',
					UUID: 'b2b3d3db-5d97-428a-9335-b5e7a9d37286',
				},
				'Định luật II Newton': {
					'Công thức': '\\vec{F} = m\\vec{a}',
					'Lý thuyết':
						'Gia tốc của một vật cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của hợp lực và tỉ lệ nghịch với khối lượng của vật.',
					UUID: 'efda939a-a824-44ed-bce7-072e86b127f5',
				},
				'Định luật III Newton': {
					'Công thức': '\\vec{F}_{AB} = -\\vec{F}_{BA}',
					'Lý thuyết':
						'Khi vật A tác dụng lên vật B một lực (trực), thì vật B cũng tác dụng lại vật A một lực (phản lực). Hai lực này luôn xuất hiện và mất đi đồng thời, có cùng giá, cùng độ lớn nhưng ngược chiều.',
					UUID: 'e74dae68-cdb6-4f3f-8653-0e11ebddfed1',
				},
				'Trọng lực': {
					'Công thức': 'P = mg',
					'Lý thuyết':
						'Trọng lực là lực hấp dẫn do Trái Đất tác dụng lên vật, có điểm đặt tại trọng tâm của vật, phương thẳng đứng, chiều từ trên xuống.',
					UUID: '01e3c404-3fa9-4388-8e5b-c8c010a8ca43',
				},
				'Lực ma sát': {
					'Công thức': 'F_{ms} = \\mu N',
					'Lý thuyết':
						'Lực ma sát là lực cản trở chuyển động, xuất hiện ở mặt tiếp xúc giữa hai vật. Độ lớn lực ma sát trượt tỉ lệ với độ lớn áp lực N, với μ là hệ số ma sát trượt.',
					UUID: '1c05ed3c-63b9-4b44-b9fd-742d424e37d4',
				},
				'Lực căng dây': {
					'Công thức': '',
					'Lý thuyết':
						'Lực căng dây xuất hiện khi dây bị kéo căng, có phương trùng với sợi dây và chiều hướng từ hai đầu vào phần giữa của dây.',
					UUID: 'ac3a6790-b3aa-49a5-be2a-ad37f3c89275',
				},
				'Lực đẩy Archimedes': {
					'Công thức': 'F_A = \\rho \\cdot g \\cdot V',
					'Lý thuyết':
						'Một vật nhúng trong chất lỏng bị chất lỏng đó đẩy thẳng đứng từ dưới lên với một lực có độ lớn bằng trọng lượng của phần chất lỏng mà vật chiếm chỗ. (ρ là khối lượng riêng của chất lỏng, V là thể tích phần chất lỏng bị vật chiếm chỗ).',
					UUID: '5af978f8-298b-444d-a56a-e61c34cc5e09',
				},
				'Lực hướng tâm': {
					'Công thức': 'F_{ht} = m a_{ht} = m\\frac{v^2}{R} = m\\omega^2 R',
					'Lý thuyết':
						'Lực (hay hợp lực) tác dụng lên một vật chuyển động tròn đều, gây ra gia tốc hướng tâm cho vật, được gọi là lực hướng tâm.',
					UUID: '521f1504-0a79-48ce-9eed-9974b33ba404',
				},
			},
			'Moment và Cân bằng vật rắn': {
				'Tổng hợp và phân tích lực': {
					'Công thức': '\\vec{F} = \\vec{F}_1 + \\vec{F}_2 + ...',
					'Lý thuyết':
						'Tổng hợp lực là thay thế các lực tác dụng đồng thời vào cùng một vật bằng một lực duy nhất có tác dụng giống hệt như các lực ấy. Phân tích lực là thao tác ngược lại.',
					UUID: '45f7cd21-3268-4950-af16-405f09647b43',
				},
				'Điều kiện cân bằng của vật rắn': {
					'Công thức': '\\sum \\vec{F} = 0; \\quad \\sum M = 0',
					'Lý thuyết':
						'Một vật rắn được coi là cân bằng khi nó đứng yên hoặc chuyển động thẳng đều. Điều kiện để vật cân bằng là hợp lực tác dụng lên vật bằng không và tổng moment lực tác dụng lên vật đối với một điểm bất kỳ cũng bằng không.',
					UUID: 'c38393a4-7aa1-4bab-bf52-e5548e98d148',
				},
				'Moment lực': {
					'Công thức': 'M = F \\cdot d',
					'Lý thuyết':
						'Moment lực đối với một trục quay là đại lượng đặc trưng cho tác dụng làm quay của lực, được đo bằng tích của độ lớn của lực (F) với cánh tay đòn (d).',
					UUID: '5a5bbfd7-e0b7-40bb-9602-565f6c96d33c',
				},
				'Quy tắc moment lực': {
					'Công thức': "M_1 + M_2 + ... = M'_1 + M'_2 + ...",
					'Lý thuyết':
						'Để một vật có trục quay cố định cân bằng, tổng các moment lực có xu hướng làm vật quay theo chiều kim đồng hồ phải bằng tổng các moment lực có xu hướng làm vật quay ngược chiều kim đồng hồ.',
					UUID: '1be4269c-4ebf-4777-b2f7-31cdac118ded',
				},
			},
			'Năng lượng và Công': {
				'Công cơ học': {
					'Công thức': 'A = F \\cdot d \\cdot \\cos\\alpha',
					'Lý thuyết':
						'Công là đại lượng đo phần năng lượng được truyền từ vật này sang vật khác thông qua lực tác dụng và làm vật dịch chuyển. α là góc giữa hướng của lực và hướng dịch chuyển.',
					UUID: 'c6db9505-e9b0-4672-8e8d-e55b6f14289e',
				},
				'Công suất': {
					'Công thức': '\\mathcal{P} = \\frac{A}{t} = F \\cdot v',
					'Lý thuyết':
						'Công suất là đại lượng đặc trưng cho tốc độ thực hiện công, được đo bằng công sinh ra trong một đơn vị thời gian.',
					UUID: '7cd96d0d-be61-481f-bb39-16faa007757f',
				},
				'Động năng': {
					'Công thức': 'W_d = \\frac{1}{2}mv^2',
					'Lý thuyết': 'Động năng là năng lượng mà một vật có được do chuyển động.',
					UUID: '2c6cde34-24a2-4f2d-9af7-d9eaf23bcea3',
				},
				'Thế năng trọng trường': {
					'Công thức': 'W_t = mgh',
					'Lý thuyết':
						'Thế năng trọng trường là năng lượng mà một vật có được do vị trí của nó trong trọng trường, phụ thuộc vào độ cao h so với mốc thế năng được chọn.',
					UUID: '0b7a51d0-5c10-4d2e-9369-dd8d79b827bd',
				},
				'Cơ năng': {
					'Công thức': 'W = W_d + W_t = \\frac{1}{2}mv^2 + mgh',
					'Lý thuyết': 'Cơ năng của một vật là tổng động năng và thế năng của nó.',
					UUID: '383a3377-958d-4acd-bd68-642c4a606046',
				},
				'Định luật bảo toàn cơ năng': {
					'Công thức':
						'W_1 = W_2 \\Leftrightarrow \\frac{1}{2}mv_1^2 + mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2',
					'Lý thuyết':
						'Khi một vật chuyển động chỉ dưới tác dụng của trọng lực (hoặc lực đàn hồi), cơ năng của vật là một đại lượng được bảo toàn.',
					UUID: '02045852-bf2d-4fe8-937f-c42e5d18ab6c',
				},
				'Hiệu suất': {
					'Công thức': 'H = \\frac{A_{ich}}{A_{toan phan}} \\cdot 100\\%',
					'Lý thuyết':
						'Hiệu suất là tỉ số giữa năng lượng có ích và năng lượng toàn phần cung cấp.',
					UUID: 'bfac1209-d342-47ec-be2a-45db59771a2c',
				},
			},
			'Động lượng': {
				'Động lượng': {
					'Công thức': '\\vec{p} = m\\vec{v}',
					'Lý thuyết':
						'Động lượng là một đại lượng vector đặc trưng cho lượng chuyển động của vật, được xác định bằng tích của khối lượng và vận tốc của vật.',
					UUID: '95ececee-1720-4421-be34-a184de3ddd2b',
				},
				'Độ biến thiên động lượng': {
					'Công thức': '\\Delta \\vec{p} = \\vec{F}_{hl} \\cdot \\Delta t',
					'Lý thuyết':
						'Độ biến thiên động lượng của một vật bằng xung lượng của hợp lực tác dụng lên vật trong khoảng thời gian đó.',
					UUID: 'c5b6dec5-3303-4278-a7f4-d8ebd9981bf6',
				},
				'Định luật bảo toàn động lượng': {
					'Công thức': '\\sum \\vec{p}_{truoc} = \\sum \\vec{p}_{sau}',
					'Lý thuyết':
						'Trong một hệ cô lập (hệ không có ngoại lực tác dụng hoặc hợp ngoại lực bằng không), tổng động lượng của hệ là một đại lượng bảo toàn.',
					UUID: '226f4506-567d-4873-aad7-20d24f793e2a',
				},
				'Va chạm': {
					'Công thức': '',
					'Lý thuyết':
						'Va chạm đàn hồi là va chạm trong đó tổng động năng của hệ được bảo toàn. Va chạm mềm là va chạm mà sau đó các vật dính vào nhau và chuyển động cùng vận tốc, động năng không bảo toàn.',
					UUID: 'e8f12191-b1a7-4110-9c4d-469d36b9abb5',
				},
			},
			'Biến dạng của vật rắn': {
				'Định luật Hooke': {
					'Công thức': 'F_{dh} = k|\\Delta l|',
					'Lý thuyết':
						'Trong giới hạn đàn hồi, độ lớn của lực đàn hồi của vật rắn (như lò xo) tỉ lệ thuận với độ biến dạng của nó. k là độ cứng (hệ số đàn hồi), Δl là độ dãn hoặc nén so với chiều dài tự nhiên.',
					UUID: '740ef739-bd4b-4246-a380-36924ad65fd1',
				},
			},
		},
		11: {
			'Dao động cơ': {
				'Dao động điều hoà': {
					'Công thức': 'x = A\\cos(\\omega t + \\phi_0)',
					'Lý thuyết':
						'Là dao động tuần hoàn trong đó li độ của vật là một hàm cosin (hoặc sin) của thời gian. Đồ thị li độ - thời gian là một đường hình sin.',
					UUID: '65611f31-10e5-446b-9f3b-cfd29cdeb4ef',
				},
				'Vận tốc trong dao động điều hoà': {
					'Công thức': 'v = -\\omega A\\sin(\\omega t + \\phi_0)',
					'Lý thuyết':
						'Vận tốc của vật dao động điều hoà cũng biến thiên điều hoà, sớm pha \\(\\pi/2\\) so với li độ.',
					UUID: '70bd2d94-2862-4191-90a9-1e33b8b77994',
				},
				'Gia tốc trong dao động điều hoà': {
					'Công thức': 'a = -\\omega^2 A\\cos(\\omega t + \\phi_0) = -\\omega^2 x',
					'Lý thuyết':
						'Gia tốc của vật dao động điều hoà cũng biến thiên điều hoà, ngược pha (lệch pha \\(\\pi\\)) so với li độ và luôn hướng về vị trí cân bằng.',
					UUID: '8c44ee0d-fe6e-404a-a01e-d90c9dce3d90',
				},
				'Hệ thức độc lập thời gian': {
					'Công thức': 'A^2 = x^2 + \\frac{v^2}{\\omega^2}',
					'Lý thuyết': 'Mối liên hệ giữa li độ và vận tốc không phụ thuộc vào thời gian.',
					UUID: '06c467c6-43b5-48d5-93ac-8783bf4eca8c',
				},
				'Tần số góc của con lắc lò xo': {
					'Công thức': '\\omega = \\sqrt{\\frac{k}{m}}',
					'Lý thuyết':
						'Tần số góc của con lắc lò xo phụ thuộc vào độ cứng k của lò xo và khối lượng m của vật.',
					UUID: '365bc8af-ccb4-4f26-aed4-ecf463d065da',
				},
				'Tần số góc của con lắc đơn': {
					'Công thức': '\\omega = \\sqrt{\\frac{g}{l}}',
					'Lý thuyết':
						'Tần số góc của con lắc đơn (dao động với biên độ nhỏ) phụ thuộc vào gia tốc trọng trường g và chiều dài l của dây treo.',
					UUID: '687aaed0-ad19-4ccd-b783-1ddbad7c8cf3',
				},
				'Năng lượng trong dao động điều hoà': {
					'Công thức':
						'W = W_d + W_t = \\frac{1}{2}mv^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2 = \\frac{1}{2}m\\omega^2A^2',
					'Lý thuyết':
						"Cơ năng của con lắc lò xo dao động điều hoà được bảo toàn, tỉ lệ với bình phương biên độ dao động. Động năng và thế năng biến thiên tuần hoàn với tần số góc \\(\\omega' = 2\\omega\\).",
					UUID: '635ce687-76f9-47c4-879d-b8f7f0ac4286',
				},
				'Dao động tắt dần': {
					'Công thức': '',
					'Lý thuyết':
						'Là dao động có biên độ giảm dần theo thời gian do tác dụng của lực cản môi trường.',
					UUID: 'e1703a51-5674-4c2d-8a1d-63b59f4c328e',
				},
				'Dao động cưỡng bức và Cộng hưởng': {
					'Công thức': '',
					'Lý thuyết':
						'Dao động cưỡng bức là dao động chịu tác dụng của một ngoại lực biến thiên tuần hoàn. Hiện tượng cộng hưởng xảy ra khi tần số của ngoại lực bằng tần số riêng của hệ, khi đó biên độ dao động đạt giá trị cực đại.',
					UUID: '2cbe3f28-2546-4dba-a396-1da8712be686',
				},
			},
			Sóng: {
				'Các đặc trưng của sóng': {
					'Công thức': '\\lambda = vT = \\frac{v}{f}',
					'Lý thuyết':
						'Sóng là sự lan truyền dao động trong một môi trường. Bước sóng (\\(\\lambda\\)) là quãng đường sóng truyền đi trong một chu kì (T). Tốc độ truyền sóng (v) phụ thuộc vào môi trường truyền sóng, còn tần số (f) của sóng thì không đổi khi truyền từ môi trường này sang môi trường khác.',
					UUID: '648fff32-2116-49d9-ae96-2b3f42808ba6',
				},
				'Phương trình sóng': {
					'Công thức': 'u = A\\cos(2\\pi(\\frac{t}{T} - \\frac{x}{\\lambda}))',
					'Lý thuyết': 'Mô tả li độ (u) của một điểm trong môi trường tại vị trí x và thời điểm t.',
					UUID: 'b995dd52-4ece-436a-88b6-821e9d7a6dc3',
				},
				'Giao thoa sóng cơ': {
					'Công thức': 'd_2 - d_1 = k\\lambda',
					'Lý thuyết':
						'Giao thoa là hiện tượng hai sóng kết hợp gặp nhau tạo nên các điểm có biên độ được tăng cường hoặc suy giảm. Vị trí các điểm có biên độ cực đại (vân giao thoa cực đại) khi hai nguồn cùng pha được xác định bởi công thức trên (k là số nguyên). Vị trí cực tiểu là \\(d_2 - d_1 = (k + 0.5)\\lambda\\).',
					UUID: 'c8be9ac4-37fb-4a20-96cf-5bf5d16194e9',
				},
				'Sóng dừng': {
					'Công thức': 'l = k\\frac{\\lambda}{2}',
					'Lý thuyết':
						'Sóng dừng là trường hợp đặc biệt của giao thoa sóng, tạo ra các điểm đứng yên (nút sóng) và các điểm dao động với biên độ cực đại (bụng sóng). Điều kiện để có sóng dừng trên dây có hai đầu cố định là chiều dài dây bằng một số nguyên lần nửa bước sóng.',
					UUID: 'af85fa10-1f25-4849-a195-6926d5cd799f',
				},
				'Sóng dừng (1 đầu cố định, 1 đầu tự do)': {
					'Công thức': 'l = (2k+1)\\frac{\\lambda}{4}',
					'Lý thuyết':
						'Điều kiện để có sóng dừng trên dây có một đầu cố định, một đầu tự do là chiều dài dây bằng một số lẻ lần một phần tư bước sóng (k là số nguyên không âm).',
					UUID: 'cd66e28a-ac46-4a27-875f-c9f017d22c59',
				},
				'Sóng điện từ': {
					'Công thức': 'c = \\lambda f',
					'Lý thuyết':
						'Là sự lan truyền của điện từ trường biến thiên. Là sóng ngang, truyền được trong chân không với tốc độ c ≈ 3.10⁸ m/s. Các tính chất đặc trưng bao gồm phản xạ, khúc xạ, nhiễu xạ, giao thoa.',
					UUID: 'd047bc40-9046-4290-98a8-e98ccf31c148',
				},
				'Giao thoa ánh sáng': {
					'Công thức': 'i = \\frac{\\lambda D}{a}',
					'Lý thuyết':
						'Hiện tượng giao thoa ánh sáng qua hai khe hẹp (thí nghiệm Young) tạo ra một hệ vân sáng và vân tối xen kẽ trên màn. Khoảng vân (i) là khoảng cách giữa hai vân sáng hoặc hai vân tối liên tiếp. Vị trí vân sáng: \\(x_s = ki\\). Vị trí vân tối: \\(x_t = (k+0.5)i\\).',
					UUID: '922bfcbb-c6cf-480b-913e-bb2dc0c57caf',
				},
			},
			'Điện học': {
				'Định luật Coulomb': {
					'Công thức': 'F = k\\frac{|q_1q_2|}{\\varepsilon r^2}',
					'Lý thuyết':
						'Lực tương tác tĩnh điện giữa hai điện tích điểm trong một môi trường có hằng số điện môi \\(\\varepsilon\\). Trong chân không, \\(\\varepsilon = 1\\) và \\(k = 9 \\cdot 10^9 \\, \\text{N}\\cdot\\text{m}^2/\\text{C}^2\\).',
					UUID: 'de797077-eee3-447a-8763-92f6ef7983ae',
				},
				'Cường độ điện trường': {
					'Công thức': 'E = \\frac{F}{q}',
					'Lý thuyết':
						'Là đại lượng vectơ đặc trưng cho điện trường về mặt tác dụng lực. Vectơ cường độ điện trường \\(\\vec{E}\\) có cùng chiều với lực điện \\(\\vec{F}\\) nếu điện tích thử q dương, và ngược chiều nếu q âm.',
					UUID: 'b4ed3ab6-d0d5-4322-bf31-b57f9efbb59f',
				},
				'Điện trường do điện tích điểm': {
					'Công thức': 'E = k\\frac{|Q|}{\\varepsilon r^2}',
					'Lý thuyết':
						'Cường độ điện trường do một điện tích điểm Q gây ra tại một điểm cách nó một khoảng r.',
					UUID: 'f7485e07-c78d-4cd7-b1fc-3f75042641de',
				},
				'Công của lực điện và Hiệu điện thế': {
					'Công thức': 'A_{MN} = qU_{MN} = q(V_M - V_N)',
					'Lý thuyết':
						'Công của lực điện trường dịch chuyển điện tích q từ điểm M đến N. Hiệu điện thế \\(U_{MN}\\) là đại lượng đặc trưng cho khả năng sinh công của điện trường khi dịch chuyển một đơn vị điện tích giữa hai điểm đó.',
					UUID: '6d0ce766-a99c-4c3f-8ad8-561ff2111cbf',
				},
				'Mối liên hệ giữa E và U': {
					'Công thức': 'E = \\frac{U}{d}',
					'Lý thuyết':
						'Mối liên hệ giữa cường độ điện trường đều E và hiệu điện thế U giữa hai điểm có hình chiếu trên một đường sức là d.',
					UUID: '769e4629-ce6d-4d9a-a243-3f6fb32fb05c',
				},
				'Tụ điện': {
					'Công thức': 'C = \\frac{Q}{U}',
					'Lý thuyết':
						'Điện dung C của tụ điện là đại lượng đặc trưng cho khả năng tích điện của tụ, đơn vị là Fara (F).',
					UUID: '2c62bf44-05c5-450a-8668-3dcc515bfeb4',
				},
				'Ghép tụ điện nối tiếp': {
					'Công thức': '\\frac{1}{C_b} = \\frac{1}{C_1} + \\frac{1}{C_2} + ...',
					'Lý thuyết':
						'Khi ghép nối tiếp, điện tích trên các tụ bằng nhau: \\(Q_1 = Q_2 = ... = Q_b\\).',
					UUID: '46794429-79fa-46af-8bfb-994b2b111b3d',
				},
				'Ghép tụ điện song song': {
					'Công thức': 'C_b = C_1 + C_2 + ...',
					'Lý thuyết':
						'Khi ghép song song, hiệu điện thế trên các tụ bằng nhau: \\(U_1 = U_2 = ... = U_b\\).',
					UUID: '8d9c1c98-2a59-46a6-99b5-4f99a3c798fb',
				},
				'Năng lượng tụ điện': {
					'Công thức': 'W = \\frac{1}{2}QU = \\frac{1}{2}CU^2 = \\frac{Q^2}{2C}',
					'Lý thuyết':
						'Năng lượng của tụ điện được dự trữ dưới dạng năng lượng điện trường giữa hai bản tụ.',
					UUID: '7b5a807f-5137-470b-bb0f-57113f1c437f',
				},
			},
			'Dòng điện không đổi': {
				'Cường độ dòng điện': {
					'Công thức': 'I = \\frac{\\Delta q}{\\Delta t}',
					'Lý thuyết':
						'Là đại lượng đặc trưng cho độ mạnh yếu của dòng điện, đo bằng điện lượng dịch chuyển qua tiết diện thẳng của vật dẫn trong một đơn vị thời gian. Đơn vị là Ampe (A).',
					UUID: 'd6c3e08b-9c42-4d5c-97dc-83a9068f3861',
				},
				'Định luật Ohm cho đoạn mạch': {
					'Công thức': 'I = \\frac{U}{R}',
					'Lý thuyết':
						'Cường độ dòng điện chạy qua một đoạn mạch chỉ có điện trở R tỉ lệ thuận với hiệu điện thế U hai đầu đoạn mạch và tỉ lệ nghịch với điện trở R.',
					UUID: '7add55f5-034e-44fd-b59b-b4da46a2cecd',
				},
				'Điện trở của vật dẫn': {
					'Công thức': 'R = \\rho \\frac{l}{S}',
					'Lý thuyết':
						'Điện trở của vật dẫn hình trụ phụ thuộc vào bản chất vật liệu (điện trở suất \\(\\rho\\)), chiều dài (l) và tiết diện (S) của vật dẫn.',
					UUID: '2ac1b4b8-8c6f-4cd1-a987-a075fe37d62a',
				},
				'Suất điện động của nguồn điện': {
					'Công thức': '\\mathscr{E} = \\frac{A_{nguon}}{q}',
					'Lý thuyết':
						'Suất điện động (\\(\\mathscr{E}\\)) của một nguồn điện là đại lượng đặc trưng cho khả năng thực hiện công của nguồn điện, đo bằng công của lực lạ khi dịch chuyển một đơn vị điện tích dương ngược chiều điện trường bên trong nguồn. Đơn vị là Vôn (V).',
					UUID: 'e36076c8-7ca3-4bba-b79c-a19eef705874',
				},
				'Định luật Ohm cho toàn mạch': {
					'Công thức': 'I = \\frac{\\mathscr{E}}{R_N + r}',
					'Lý thuyết':
						'Cường độ dòng điện trong mạch kín tỉ lệ thuận với suất điện động của nguồn và tỉ lệ nghịch với tổng điện trở của mạch ngoài (R_N) và điện trở trong (r) của nguồn.',
					UUID: '2d75ee65-9f9d-41c3-88b2-9e3527d29faa',
				},
				'Công và Công suất điện': {
					'Công thức': '\\mathscr{P} = UI = I^2R = \\frac{U^2}{R}',
					'Lý thuyết':
						'Công suất tiêu thụ điện của một đoạn mạch là năng lượng điện mà đoạn mạch đó tiêu thụ trong một đơn vị thời gian. Công của dòng điện: A = P.t.',
					UUID: '68e7b31a-9867-433d-a620-d0cb1893d1ee',
				},
				'Công và Công suất của nguồn điện': {
					'Công thức': '\\mathscr{P}_{ng} = \\mathscr{E}I',
					'Lý thuyết':
						'Công suất của nguồn điện. Công của nguồn điện: \\(A_{ng} = \\mathscr{P}_{ng} \\cdot t = \\mathscr{E}It\\).',
					UUID: 'be5a014c-ce76-482d-b31c-21538641f22b',
				},
				'Hiệu suất của nguồn điện': {
					'Công thức': 'H = \\frac{U_N}{\\mathscr{E}} = \\frac{R_N}{R_N + r}',
					'Lý thuyết':
						'Là tỉ số giữa công suất có ích (ở mạch ngoài) và công suất toàn phần của nguồn điện.',
					UUID: 'def442f6-2fd3-4646-bb51-18d72b176ab4',
				},
			},
		},
		12: {
			'Vật lí nhiệt': {
				'Sự nóng chảy': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình chuyển từ thể rắn sang thể lỏng. Đối với chất rắn kết tinh, quá trình này xảy ra ở một nhiệt độ xác định gọi là nhiệt độ nóng chảy. Đối với chất rắn vô định hình, quá trình này xảy ra trong một khoảng nhiệt độ.',
					UUID: '06751e17-e903-417b-9906-c45e6f7c6ab8',
				},
				'Nhiệt nóng chảy riêng': {
					'Công thức': '\\lambda = \\frac{Q}{m}',
					'Lý thuyết':
						'Nhiệt nóng chảy riêng (λ) của một chất có giá trị bằng nhiệt lượng (Q) cần cung cấp để làm 1 kg chất đó (m) chuyển hoàn toàn từ thể rắn sang thể lỏng ở nhiệt độ nóng chảy. Đơn vị là J/kg.',
					UUID: '75e87ef0-5eea-4723-877a-9b30f9146b7d',
				},
				'Sự bay hơi và sự sôi': {
					'Công thức': '',
					'Lý thuyết':
						'Sự bay hơi là quá trình chuyển từ thể lỏng sang thể khí xảy ra ở bề mặt chất lỏng. Sự sôi là quá trình bay hơi xảy ra cả ở bên trong và trên bề mặt chất lỏng, diễn ra ở nhiệt độ sôi xác định phụ thuộc vào áp suất bên ngoài.',
					UUID: '1b264b7f-7803-489b-b114-c66c5c84d9ba',
				},
				'Nhiệt hoá hơi riêng': {
					'Công thức': 'L = \\frac{Q}{m}',
					'Lý thuyết':
						'Nhiệt hoá hơi riêng (L) của một chất lỏng có giá trị bằng nhiệt lượng (Q) cần cung cấp để làm 1 kg chất lỏng đó (m) hoá hơi hoàn toàn ở nhiệt độ sôi. Đơn vị là J/kg.',
					UUID: '2c08813e-3206-4363-9b36-b23233fa0bd7',
				},
				'Thang nhiệt độ': {
					'Công thức': 'T(K) = t(°C) + 273,15 \\\\ T(°F) = 1,8t(°C) + 32',
					'Lý thuyết':
						'Thang Celsius (°C) dựa trên điểm đông đặc (0°C) và điểm sôi (100°C) của nước ở áp suất 1 atm. Thang Kelvin (K) là thang nhiệt độ tuyệt đối, với 0 K là nhiệt độ không tuyệt đối. Thang Fahrenheit (°F) là một thang đo nhiệt độ khác.',
					UUID: 'b75b10ee-7dc4-49f0-8d3f-bd0d27a554fd',
				},
				'Nội năng': {
					'Công thức': '',
					'Lý thuyết':
						'Nội năng của một vật là tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa chúng. Nội năng phụ thuộc vào nhiệt độ và thể tích của vật.',
					UUID: '2d98121b-8f91-4130-bdbe-1b3b3618c2e8',
				},
				'Nhiệt dung riêng': {
					'Công thức': 'Q = mc(T_2 - T_1)',
					'Lý thuyết':
						'Nhiệt lượng (Q) mà một vật thu vào hay toả ra khi nhiệt độ thay đổi được tính theo khối lượng (m), nhiệt dung riêng (c) và độ biến thiên nhiệt độ. Nhiệt dung riêng là nhiệt lượng cần thiết để làm 1 kg chất tăng thêm 1 K.',
					UUID: 'ed86ace8-63a3-4c77-9fac-18b1be3eb34f',
				},
				'Định luật 1 Nhiệt động lực học': {
					'Công thức': '\\Delta U = A + Q',
					'Lý thuyết':
						'Độ biến thiên nội năng (ΔU) của một hệ bằng tổng công (A) và nhiệt lượng (Q) mà hệ nhận được. Quy ước dấu: Q > 0: Hệ nhận nhiệt lượng; Q < 0: Hệ truyền nhiệt lượng; A > 0: Hệ nhận công; A < 0: Hệ thực hiện công.',
					UUID: '0d235139-5967-459c-9caf-8bb245a2075b',
				},
			},
			'Khí lí tưởng': {
				'Thuyết động học phân tử chất khí': {
					'Công thức': '',
					'Lý thuyết':
						'Chất khí được cấu tạo từ các phân tử có kích thước rất nhỏ, chuyển động hỗn loạn không ngừng. Khi nhiệt độ càng cao, các phân tử chuyển động càng nhanh. Áp suất chất khí lên thành bình là do các va chạm của phân tử khí lên thành bình.',
					UUID: '89c0ae90-f744-4cb1-a24e-bec0ca092c5b',
				},
				'Phương trình trạng thái khí lí tưởng': {
					'Công thức': '\\frac{p_1V_1}{T_1} = \\frac{p_2V_2}{T_2} \\\\ pV = nRT',
					'Lý thuyết':
						'Phương trình liên hệ giữa ba thông số trạng thái: áp suất (p), thể tích (V) và nhiệt độ tuyệt đối (T) của một lượng khí không đổi. Trong đó n là số mol khí, R là hằng số khí lí tưởng (R ≈ 8,31 J/mol.K).',
					UUID: '91cd155c-66cb-4486-86bc-55c1852c6fc7',
				},
				'Quá trình đẳng nhiệt (Định luật Boyle)': {
					'Công thức': 'pV = \\text{hằng số} \\\\ p_1V_1 = p_2V_2',
					'Lý thuyết':
						'Trong quá trình đẳng nhiệt (nhiệt độ không đổi) của một lượng khí nhất định, áp suất tỉ lệ nghịch với thể tích.',
					UUID: 'ab34be43-5479-4730-885e-5c6c7569871d',
				},
				'Quá trình đẳng áp (Định luật Charles)': {
					'Công thức': '\\frac{V}{T} = \\text{hằng số} \\\\ \\frac{V_1}{T_1} = \\frac{V_2}{T_2}',
					'Lý thuyết':
						'Trong quá trình đẳng áp (áp suất không đổi) của một lượng khí nhất định, thể tích tỉ lệ thuận với nhiệt độ tuyệt đối.',
					UUID: '71b85852-08bf-4316-be93-20f24110f98b',
				},
				'Quá trình đẳng tích': {
					'Công thức': '\\frac{p}{T} = \\text{hằng số} \\\\ \\frac{p_1}{T_1} = \\frac{p_2}{T_2}',
					'Lý thuyết':
						'Trong quá trình đẳng tích (thể tích không đổi) của một lượng khí nhất định, áp suất tỉ lệ thuận với nhiệt độ tuyệt đối.',
					UUID: '49384654-f3c8-4bc6-bf9e-36adbe29e2a1',
				},
				'Áp suất và động năng phân tử': {
					'Công thức': 'p = \\frac{1}{3}\\mu \\overline{v^2} \\\\ W_đ = \\frac{3}{2}kT',
					'Lý thuyết':
						'Áp suất (p) của chất khí liên quan đến mật độ phân tử (μ) và bình phương trung bình của vận tốc phân tử. Động năng tịnh tiến trung bình (Wđ) của một phân tử khí tỉ lệ thuận với nhiệt độ tuyệt đối (T), với k là hằng số Boltzmann (k ≈ 1,38.10⁻²³ J/K).',
					UUID: '5e234fed-29a1-4015-9417-0ce8fb348265',
				},
			},
			'Từ trường và Cảm ứng điện từ': {
				'Lực từ': {
					'Công thức': 'F = BIL\\sin\\theta',
					'Lý thuyết':
						'Lực từ (F) tác dụng lên một đoạn dây dẫn có chiều dài L, mang dòng điện I, đặt trong từ trường đều B, hợp với B một góc θ. Chiều của lực từ được xác định bằng quy tắc bàn tay trái.',
					UUID: 'fba17520-110c-453f-b5eb-15025b576e1f',
				},
				'Cảm ứng từ': {
					'Công thức': 'B = \\frac{F}{IL\\sin\\theta}',
					'Lý thuyết':
						'Cảm ứng từ (B) là đại lượng vật lí đặc trưng cho từ trường về mặt tác dụng lực. Đơn vị của cảm ứng từ là Tesla (T).',
					UUID: 'c0b5635b-ec70-403a-b257-55d050763f0c',
				},
				'Cảm ứng từ của các dòng điện đặc biệt': {
					'Công thức':
						'B = 2 \\cdot 10^{-7} \\frac{I}{r} \\\\ B = 2\\pi \\cdot 10^{-7} \\frac{NI}{R} \\\\ B = 4\\pi \\cdot 10^{-7} \\frac{NI}{L}',
					'Lý thuyết':
						'Công thức tính cảm ứng từ gây ra bởi dòng điện thẳng dài (công thức 1, r là khoảng cách), tại tâm dòng điện tròn N vòng bán kính R (công thức 2), và trong lòng ống dây dài L có N vòng (công thức 3).',
					UUID: '80da7edd-acdd-4093-acab-ab082f49da64',
				},
				'Từ thông': {
					'Công thức': '\\Phi = BScos\\alpha',
					'Lý thuyết':
						'Từ thông (Φ) qua một diện tích S đặt trong từ trường đều B là một đại lượng vô hướng, được xác định bởi cảm ứng từ B, diện tích S và góc α hợp bởi vectơ pháp tuyến của mặt phẳng và vectơ cảm ứng từ. Đơn vị là Weber (Wb).',
					UUID: 'e337de8f-e314-473a-b593-5456854194a2',
				},
				'Suất điện động cảm ứng': {
					'Công thức': '|e_c| = |\\frac{\\Delta\\Phi}{\\Delta t}| \\\\ e = -N\\frac{d\\Phi}{dt}',
					'Lý thuyết':
						"Khi từ thông qua một mạch kín biến thiên, trong mạch xuất hiện một suất điện động cảm ứng (ec). Độ lớn của suất điện động cảm ứng tỉ lệ với tốc độ biến thiên của từ thông. Dấu '-' trong công thức thể hiện định luật Lenz, cho biết suất điện động cảm ứng có xu hướng chống lại sự biến thiên của từ thông đã sinh ra nó.",
					UUID: '723eff0a-7856-45a1-8e48-aff6cba6bfad',
				},
				'Dòng điện xoay chiều': {
					'Công thức': 'i = I_0\\cos(\\omega t + \\phi_i) \\\\ u = U_0\\cos(\\omega t + \\phi_u)',
					'Lý thuyết':
						'Dòng điện xoay chiều là dòng điện có cường độ biến thiên điều hòa theo thời gian với tần số góc ω. i và u là giá trị tức thời, I₀ và U₀ là giá trị cực đại.',
					UUID: 'efcc9052-d1e1-4b35-8d40-1eb1eb00f5b9',
				},
				'Giá trị hiệu dụng của dòng điện xoay chiều': {
					'Công thức': 'I = \\frac{I_0}{\\sqrt{2}} \\\\ U = \\frac{U_0}{\\sqrt{2}}',
					'Lý thuyết':
						'Các giá trị hiệu dụng (I, U) của dòng điện và điện áp xoay chiều được định nghĩa dựa trên tác dụng nhiệt tương đương với dòng điện không đổi.',
					UUID: 'a9ed41d6-aaa5-4d59-9959-8f7402fdd217',
				},
				'Công suất nhiệt của dòng điện xoay chiều': {
					'Công thức': '\\mathcal{P} = RI^2',
					'Lý thuyết':
						'Công suất toả nhiệt trung bình (P) trên một điện trở R khi có dòng điện xoay chiều chạy qua được tính bằng giá trị hiệu dụng của cường độ dòng điện.',
					UUID: '0ecd572d-7b54-4b41-b4ca-d40f24900456',
				},
			},
			'Vật lí hạt nhân': {
				'Cấu tạo hạt nhân': {
					'Công thức': 'A = Z + N',
					'Lý thuyết':
						'Hạt nhân được cấu tạo từ các nucleon, bao gồm proton (mang điện tích dương) và neutron (không mang điện). Z là số proton (số hiệu nguyên tử), N là số neutron, và A là số khối (tổng số nucleon). Kí hiệu hạt nhân là `^A_ZX`.',
					UUID: 'bce75732-dda6-4ef1-abac-79df2ac7f829',
				},
				'Đồng vị': {
					'Công thức': '',
					'Lý thuyết':
						'Các đồng vị của một nguyên tố là những nguyên tử có cùng số proton (Z) nhưng khác nhau về số neutron (N).',
					UUID: '2986ad70-1370-48d1-a2cf-5a95d2339bc8',
				},
				'Hệ thức Einstein': {
					'Công thức': 'E = mc^2',
					'Lý thuyết':
						'Hệ thức tương đương giữa khối lượng (m) và năng lượng (E). Một vật có khối lượng m thì có năng lượng nghỉ tương ứng là E, với c là tốc độ ánh sáng trong chân không (c ≈ 3.10⁸ m/s).',
					UUID: 'c477b737-5e27-457f-b652-c2428f571c83',
				},
				'Độ hụt khối và Năng lượng liên kết': {
					'Công thức': '\\Delta m = [Zm_p + (A-Z)m_n] - m_{hn} \\\\ E_{lk} = \\Delta m c^2',
					'Lý thuyết':
						'Độ hụt khối (Δm) là độ chênh lệch giữa tổng khối lượng của các nucleon tạo thành hạt nhân và khối lượng của chính hạt nhân đó. Năng lượng liên kết (Elk) là năng lượng cần thiết để phá vỡ một hạt nhân thành các nucleon riêng rẽ, hoặc là năng lượng tỏa ra khi các nucleon kết hợp tạo thành hạt nhân.',
					UUID: '7cb17f4b-2d0a-4120-a6b3-cf71a0591d09',
				},
				'Năng lượng liên kết riêng': {
					'Công thức': 'E_{lkr} = \\frac{E_{lk}}{A}',
					'Lý thuyết':
						'Năng lượng liên kết riêng là năng lượng liên kết tính trên mỗi nucleon. Nó đặc trưng cho mức độ bền vững của hạt nhân. Hạt nhân có năng lượng liên kết riêng càng lớn thì càng bền vững.',
					UUID: '2b1b21ba-5a1a-4d05-94fd-42ee7da32a2a',
				},
				'Phản ứng hạt nhân': {
					'Công thức': 'W = (m_{truoc} - m_{sau})c^2',
					'Lý thuyết':
						'Là quá trình biến đổi của các hạt nhân. Các định luật bảo toàn cơ bản là bảo toàn điện tích và bảo toàn số khối. Năng lượng của phản ứng (W) được xác định bởi sự thay đổi khối lượng nghỉ. Nếu W > 0, phản ứng tỏa năng lượng. Nếu W < 0, phản ứng thu năng lượng.',
					UUID: 'b06d7815-f5d7-4920-a97a-a73848e6bf27',
				},
				'Phản ứng phân hạch': {
					'Công thức': '',
					'Lý thuyết':
						'Là phản ứng trong đó một hạt nhân nặng vỡ thành hai hạt nhân trung bình, kèm theo sự giải phóng năng lượng và một vài neutron.',
					UUID: '2c1e22c0-9118-4209-9aea-9a69450412e1',
				},
				'Phản ứng nhiệt hạch': {
					'Công thức': '',
					'Lý thuyết':
						'Là phản ứng trong đó hai hay nhiều hạt nhân nhẹ hợp lại thành một hạt nhân nặng hơn, và cũng giải phóng năng lượng lớn. Điều kiện để xảy ra là nhiệt độ rất cao.',
					UUID: '269eda5e-5cf9-46f0-89e5-4a6a8fb969c5',
				},
				'Hiện tượng phóng xạ': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình phân rã tự phát của một hạt nhân không bền vững. Quá trình này phát ra các tia phóng xạ (alpha, beta, gamma) và biến đổi hạt nhân ban đầu thành một hạt nhân khác.',
					UUID: '110b7001-5b66-4111-8f03-acdff2ab4185',
				},
				'Định luật phóng xạ': {
					'Công thức': 'N(t) = N_0 e^{-\\lambda t} \\\\ H(t) = H_0 e^{-\\lambda t}',
					'Lý thuyết':
						'Số lượng hạt nhân chưa phân rã N(t) và độ phóng xạ H(t) của một mẫu giảm theo thời gian theo quy luật hàm số mũ. N₀ và H₀ là các giá trị ban đầu, λ là hằng số phóng xạ.',
					UUID: '085e6b62-9f30-49c2-b0ba-50c405fc62d6',
				},
				'Chu kì bán rã': {
					'Công thức': 'T = \\frac{\\ln 2}{\\lambda}',
					'Lý thuyết':
						'Chu kì bán rã (T) là thời gian để một nửa số hạt nhân của một mẫu chất phóng xạ bị phân rã. Đây là một đại lượng đặc trưng cho mỗi chất phóng xạ.',
					UUID: '70a40139-2376-460a-a9ff-79013aa64943',
				},
			},
		},
	},
	hoa: {
		10: {
			'Cấu tạo nguyên tử': {
				'Thành phần nguyên tử': {
					'Công thức': '',
					'Lý thuyết':
						'Nguyên tử gồm hạt nhân ở tâm và vỏ electron. Hạt nhân gồm các hạt proton (mang điện tích dương, +1) và neutron (không mang điện). Vỏ nguyên tử gồm các hạt electron (mang điện tích âm, -1) chuyển động xung quanh hạt nhân. Nguyên tử trung hòa về điện nên số proton bằng số electron.',
					UUID: '2bd96172-19f5-429b-9493-5aecf87bf333',
				},
				'Khối lượng nguyên tử': {
					'Công thức':
						'1 \\text{ amu} = \\frac{1}{12} \\times m_C = 1,66 \\times 10^{-24} \\text{ g}',
					'Lý thuyết':
						'Đơn vị khối lượng nguyên tử, kí hiệu là amu. 1 amu có giá trị bằng 1/12 khối lượng của nguyên tử carbon-12. Khối lượng của proton và neutron xấp xỉ 1 amu, còn khối lượng của electron rất nhỏ (khoảng 0,00055 amu).',
					UUID: 'af41b860-d612-4912-9973-40b8656430ce',
				},
				'Nguyên tố hóa học': {
					'Công thức': '',
					'Lý thuyết':
						'Là tập hợp những nguyên tử có cùng điện tích hạt nhân (cùng số proton). Số đơn vị điện tích hạt nhân (Z) của một nguyên tố được gọi là số hiệu nguyên tử của nguyên tố đó.',
					UUID: '40873a23-c09c-478d-9d5b-bf5a323934a8',
				},
				'Số khối': {
					'Công thức': 'A = Z + N',
					'Lý thuyết':
						'Số khối (A) là tổng số hạt proton (Z) và số hạt neutron (N) trong hạt nhân nguyên tử.',
					UUID: '8b7f6004-a611-4b96-bb1a-a8a86d6422ab',
				},
				'Đồng vị': {
					'Công thức': '',
					'Lý thuyết':
						'Là những nguyên tử của cùng một nguyên tố hóa học (cùng số proton) nhưng có số neutron khác nhau, do đó số khối của chúng khác nhau.',
					UUID: '7eb0785e-9dd7-4f47-97a7-a5a89602b205',
				},
				'Nguyên tử khối trung bình': {
					'Công thức':
						'\\bar{A} = \\frac{a_1 \\times A_1 + a_2 \\times A_2 + ... + a_i \\times A_i}{100}',
					'Lý thuyết':
						'Nguyên tử khối của một nguyên tố là nguyên tử khối trung bình của hỗn hợp các đồng vị của nguyên tố đó, có tính đến tỉ lệ phần trăm số nguyên tử của mỗi đồng vị. Trong đó, A_i là số khối của đồng vị thứ i và a_i là tỉ lệ phần trăm số nguyên tử của đồng vị đó.',
					UUID: '42da96e1-1b0f-4b98-ab00-0287c714bf24',
				},
				'Cấu trúc vỏ electron': {
					'Công thức': '',
					'Lý thuyết':
						'Trong nguyên tử, các electron được sắp xếp thành từng lớp, các lớp được sắp xếp theo thứ tự năng lượng từ thấp đến cao (gần hạt nhân ra xa). Các lớp electron (n = 1, 2, 3,...) được kí hiệu tương ứng là K, L, M,.... Mỗi lớp lại được chia thành các phân lớp s, p, d, f. Số electron tối đa trong một lớp thứ n là 2n² (với n ≤ 4).',
					UUID: '96cc1b08-ff70-4273-b416-ec309417b602',
				},
				'Cấu hình electron': {
					'Công thức': '',
					'Lý thuyết':
						'Biểu diễn sự phân bố electron trên các phân lớp thuộc các lớp khác nhau. Các electron được phân bố lần lượt vào các orbital có mức năng lượng từ thấp đến cao (1s 2s 2p 3s 3p 4s 3d 4p 5s...) theo nguyên lí vững bền, nguyên lí Pauli và quy tắc Hund.',
					UUID: '0a7b34ae-c332-4b8f-8498-af894b37c320',
				},
			},
			'Bảng tuần hoàn và Định luật tuần hoàn': {
				'Cấu tạo Bảng tuần hoàn': {
					'Công thức': '',
					'Lý thuyết':
						'Các nguyên tố hóa học được sắp xếp theo chiều tăng dần của điện tích hạt nhân. Bảng gồm có các ô nguyên tố, chu kì và nhóm. Ô nguyên tố cho biết số hiệu nguyên tử, kí hiệu, tên nguyên tố và nguyên tử khối. Chu kì là dãy các nguyên tố mà nguyên tử của chúng có cùng số lớp electron. Nhóm gồm các nguyên tố mà nguyên tử có cấu hình electron tương tự nhau, do đó có tính chất hóa học gần giống nhau.',
					UUID: '9249c46a-9524-411a-8a80-6642f11d53e3',
				},
				'Sự biến đổi bán kính nguyên tử': {
					'Công thức': '',
					'Lý thuyết':
						'Trong một chu kì, theo chiều tăng dần điện tích hạt nhân, bán kính nguyên tử có xu hướng giảm dần. Trong một nhóm A, theo chiều tăng dần điện tích hạt nhân, bán kính nguyên tử có xu hướng tăng dần.',
					UUID: 'd18ae146-fb0a-4c02-ae25-cccb7046c54f',
				},
				'Sự biến đổi độ âm điện': {
					'Công thức': '',
					'Lý thuyết':
						'Độ âm điện của một nguyên tử đặc trưng cho khả năng hút electron của nguyên tử đó khi tạo thành liên kết hóa học. Trong một chu kì, theo chiều tăng dần điện tích hạt nhân, độ âm điện có xu hướng tăng dần. Trong một nhóm A, theo chiều tăng dần điện tích hạt nhân, độ âm điện có xu hướng giảm dần.',
					UUID: '6a255713-becb-4d6e-9d16-791e6676487d',
				},
				'Sự biến đổi tính kim loại - phi kim': {
					'Công thức': '',
					'Lý thuyết':
						'Trong một chu kì, theo chiều tăng dần điện tích hạt nhân, tính kim loại giảm dần, tính phi kim tăng dần. Trong một nhóm A, theo chiều tăng dần điện tích hạt nhân, tính kim loại tăng dần, tính phi kim giảm dần.',
					UUID: 'beac4def-f948-48ca-be30-076fa7ebc254',
				},
				'Sự biến đổi tính acid - base của oxide và hydroxide': {
					'Công thức': '',
					'Lý thuyết':
						'Trong một chu kì, theo chiều tăng dần điện tích hạt nhân, tính base của các oxide và hydroxide tương ứng yếu dần, đồng thời tính acid của chúng mạnh dần.',
					UUID: 'd2c6e79c-7961-42ca-a254-9945d8b3d1dd',
				},
				'Định luật tuần hoàn': {
					'Công thức': '',
					'Lý thuyết':
						'Tính chất của các nguyên tố và đơn chất, cũng như thành phần và tính chất của các hợp chất tạo nên từ các nguyên tố đó biến đổi tuần hoàn theo chiều tăng của điện tích hạt nhân nguyên tử.',
					UUID: 'f8625c3d-d167-43ab-a20f-b9bb4840df23',
				},
			},
			'Liên kết hóa học': {
				'Quy tắc Octet': {
					'Công thức': '',
					'Lý thuyết':
						'Khi hình thành liên kết hóa học, nguyên tử của các nguyên tố có xu hướng nhường, nhận hoặc góp chung electron để đạt được cấu hình electron bền vững của nguyên tử khí hiếm gần nhất (với 8 electron ở lớp ngoài cùng, hoặc 2 đối với helium).',
					UUID: '2538a9a5-1b57-4549-9b69-01de4b4263c2',
				},
				'Liên kết ion': {
					'Công thức': '',
					'Lý thuyết':
						'Là liên kết được hình thành bởi lực hút tĩnh điện giữa các ion mang điện tích trái dấu. Thường được hình thành giữa kim loại điển hình và phi kim điển hình. Hợp chất ion thường ở trạng thái rắn, có nhiệt độ nóng chảy và nhiệt độ sôi cao, dẫn điện khi nóng chảy hoặc tan trong nước.',
					UUID: '3e12b011-ab6d-41ea-8315-6b6c84d90021',
				},
				'Liên kết cộng hóa trị': {
					'Công thức': '',
					'Lý thuyết':
						'Là liên kết được hình thành giữa hai nguyên tử bằng một hay nhiều cặp electron dùng chung. Nếu cặp electron dùng chung không bị lệch về phía nguyên tử nào thì đó là liên kết cộng hóa trị không phân cực. Nếu cặp electron dùng chung bị lệch về phía nguyên tử có độ âm điện lớn hơn thì đó là liên kết cộng hóa trị phân cực.',
					UUID: 'ae01ab17-8c0b-4106-8efb-ed945d13b1d4',
				},
				'Phân loại liên kết dựa vào hiệu độ âm điện (Δχ)': {
					'Công thức': '',
					'Lý thuyết':
						'Dựa vào hiệu độ âm điện (Δχ) giữa hai nguyên tử tham gia liên kết: Nếu 0 ≤ Δχ < 0,4: liên kết cộng hóa trị không phân cực. Nếu 0,4 ≤ Δχ < 1,7: liên kết cộng hóa trị phân cực. Nếu Δχ ≥ 1,7: liên kết ion.',
					UUID: '3d84e3b1-93dd-4029-9aa8-19fff79003f8',
				},
				'Liên kết cho - nhận': {
					'Công thức': '',
					'Lý thuyết':
						'Là một trường hợp đặc biệt của liên kết cộng hóa trị, trong đó cặp electron dùng chung chỉ do một nguyên tử đóng góp.',
					UUID: 'f674bcbd-5649-49b2-9229-faed49d8ca13',
				},
				'Liên kết Hydrogen': {
					'Công thức': '',
					'Lý thuyết':
						'Là một loại liên kết yếu, được hình thành giữa nguyên tử H (đã liên kết với một nguyên tử có độ âm điện lớn, thường là F, O, N) với một nguyên tử khác có độ âm điện lớn (F, O, N) còn cặp electron hóa trị chưa tham gia liên kết. Liên kết hydrogen làm tăng nhiệt độ nóng chảy, nhiệt độ sôi của nhiều chất.',
					UUID: 'be997381-d0a9-4172-a509-28855d51f7f1',
				},
				'Tương tác van der Waals': {
					'Công thức': '',
					'Lý thuyết':
						'Là một loại tương tác yếu giữa các phân tử, được hình thành do sự xuất hiện của các lưỡng cực tạm thời và lưỡng cực cảm ứng. Tương tác này tăng theo sự tăng của khối lượng phân tử và kích thước phân tử, làm tăng nhiệt độ nóng chảy và nhiệt độ sôi.',
					UUID: 'f8b02d50-d335-400b-a5b0-c97726e9871c',
				},
			},
			'Phản ứng oxi hóa - khử': {
				'Số oxi hóa': {
					'Công thức': '',
					'Lý thuyết':
						'Là điện tích của nguyên tử trong phân tử nếu giả định rằng liên kết giữa các nguyên tử trong phân tử là liên kết ion. Có 4 quy tắc để xác định: 1. Trong đơn chất, số oxi hóa của nguyên tử bằng 0. 2. Trong phân tử, tổng số oxi hóa của các nguyên tử bằng 0. 3. Trong ion, tổng số oxi hóa bằng điện tích ion. 4. Một số quy tắc cho các nguyên tố phổ biến (H là +1, O là -2, kim loại IA, IIA, Al có số oxi hóa tương ứng là +1, +2, +3).',
					UUID: 'aa5adc75-9666-4a0c-8b8e-2a353e94d526',
				},
				'Phản ứng oxi hóa - khử': {
					'Công thức': '',
					'Lý thuyết':
						'Là phản ứng hóa học trong đó có sự thay đổi số oxi hóa của một số nguyên tố. Quá trình oxi hóa (sự oxi hóa) là quá trình nhường electron, làm tăng số oxi hóa. Quá trình khử (sự khử) là quá trình nhận electron, làm giảm số oxi hóa. Chất khử là chất nhường electron, chất oxi hóa là chất nhận electron.',
					UUID: '31b1d6ad-e0a4-49e2-92ee-6a63abfbd8f0',
				},
				'Phương pháp thăng bằng electron': {
					'Công thức': '',
					'Lý thuyết':
						'Dùng để lập phương trình hóa học của phản ứng oxi hóa - khử, dựa trên nguyên tắc tổng số electron do chất khử nhường bằng tổng số electron do chất oxi hóa nhận. Gồm 4 bước: 1. Xác định số oxi hóa, tìm chất khử và chất oxi hóa. 2. Viết quá trình oxi hóa và quá trình khử. 3. Tìm hệ số thích hợp cho chất khử và chất oxi hóa. 4. Đặt hệ số vào phương trình và cân bằng các nguyên tố còn lại.',
					UUID: 'c910f471-a02c-4c4f-9f08-335c145d4b6f',
				},
			},
			'Năng lượng hóa học': {
				'Phản ứng tỏa nhiệt và thu nhiệt': {
					'Công thức': '',
					'Lý thuyết':
						'Phản ứng tỏa nhiệt là phản ứng hóa học giải phóng năng lượng dưới dạng nhiệt. Phản ứng thu nhiệt là phản ứng hóa học hấp thụ năng lượng dưới dạng nhiệt.',
					UUID: 'e42fceaf-16ed-41c3-b823-9d2b82b53584',
				},
				'Biến thiên enthalpy chuẩn': {
					'Công thức': '\\Delta_rH_{298}^o',
					'Lý thuyết':
						'Là nhiệt lượng tỏa ra hay thu vào của một phản ứng hóa học được thực hiện ở điều kiện chuẩn (áp suất 1 bar đối với chất khí, nồng độ 1 mol/L đối với chất tan và nhiệt độ thường được chọn là 25°C hay 298 K). Phản ứng tỏa nhiệt có ΔH < 0, phản ứng thu nhiệt có ΔH > 0.',
					UUID: '73c4d8a8-d519-46fc-8e2b-94594d179b5a',
				},
				'Enthalpy tạo thành chuẩn': {
					'Công thức': '\\Delta_fH_{298}^o',
					'Lý thuyết':
						'Enthalpy tạo thành của một chất là biến thiên enthalpy của phản ứng tạo thành 1 mol chất đó từ các đơn chất ở dạng bền vững nhất, ở một điều kiện xác định. Enthalpy tạo thành chuẩn của các đơn chất bền vững bằng 0.',
					UUID: '9fcf3cc3-fb29-4f9a-a50e-598f1ba7fcd1',
				},
				'Tính biến thiên enthalpy phản ứng theo enthalpy tạo thành': {
					'Công thức':
						'\\Delta_rH_{298}^o = \\sum \\Delta_fH_{298}^o (sp) - \\sum \\Delta_fH_{298}^o (cd)',
					'Lý thuyết':
						'Biến thiên enthalpy của phản ứng bằng tổng enthalpy tạo thành chuẩn của các sản phẩm trừ đi tổng enthalpy tạo thành chuẩn của các chất đầu.',
					UUID: 'd02e0f23-289d-4916-907e-f0ef4d1f9781',
				},
				'Tính biến thiên enthalpy phản ứng theo năng lượng liên kết': {
					'Công thức': '\\Delta_rH_{298}^o = \\sum E_b (cd) - \\sum E_b (sp)',
					'Lý thuyết':
						'Biến thiên enthalpy của phản ứng bằng tổng năng lượng liên kết của các chất đầu trừ đi tổng năng lượng liên kết của các sản phẩm. (Áp dụng cho phản ứng ở thể khí).',
					UUID: 'e7b12d0f-797b-4440-a0b0-664a8722b210',
				},
			},
			'Tốc độ phản ứng hóa học': {
				'Tốc độ trung bình của phản ứng': {
					'Công thức':
						'\\bar{v} = -\\frac{1}{a} \\frac{\\Delta C_A}{\\Delta t} = -\\frac{1}{b} \\frac{\\Delta C_B}{\\Delta t} = \\frac{1}{c} \\frac{\\Delta C_C}{\\Delta t} = \\frac{1}{d} \\frac{\\Delta C_D}{\\Delta t}',
					'Lý thuyết':
						'Đối với phản ứng aA + bB → cC + dD, tốc độ trung bình của phản ứng được tính bằng sự biến thiên nồng độ của một chất trong một khoảng thời gian.',
					UUID: 'b8c51a9f-2110-4019-95dc-cb72946dacf3',
				},
				'Các yếu tố ảnh hưởng đến tốc độ phản ứng': {
					'Công thức': '',
					'Lý thuyết':
						'Tốc độ phản ứng bị ảnh hưởng bởi các yếu tố: nồng độ (tăng nồng độ chất phản ứng, tốc độ tăng), nhiệt độ (tăng nhiệt độ, tốc độ tăng), áp suất (đối với phản ứng có chất khí, tăng áp suất, tốc độ tăng), diện tích bề mặt tiếp xúc (tăng diện tích bề mặt, tốc độ tăng) và chất xúc tác (làm tăng tốc độ phản ứng nhưng không bị tiêu hao).',
					UUID: '1f22c6eb-3909-4e21-ab92-2b592c199698',
				},
				'Hệ số nhiệt độ Vant Hoff': {
					'Công thức': '\\gamma = \\frac{v_{t+10}}{v_t}',
					'Lý thuyết':
						"Hệ số nhiệt độ Van't Hoff (γ) cho biết tốc độ phản ứng tăng lên bao nhiêu lần khi nhiệt độ tăng lên 10°C. Mối quan hệ giữa tốc độ ở hai nhiệt độ là: $v_{t_2} = v_{t_1} \\times \\gamma^{\\frac{t_2 - t_1}{10}}$",
					UUID: '6bf1ffbb-eac2-49ee-99d9-496d967801f3',
				},
			},
			'Halogen và hợp chất': {
				'Tính chất hóa học của Halogen': {
					'Công thức': 'X_2 + 2e \\rightarrow 2X^-',
					'Lý thuyết':
						'Halogen là những phi kim điển hình, có tính oxi hóa mạnh. Tính oxi hóa giảm dần từ fluorine đến iodine. Chúng phản ứng với hầu hết kim loại, với hydrogen và một số phi kim khác. Halogen mạnh hơn có thể đẩy halogen yếu hơn ra khỏi dung dịch muối.',
					UUID: '4710b7e0-3e3f-4597-8453-6c19d5ae6101',
				},
				'Phản ứng của Halogen với nước': {
					'Công thức': 'X_2 + H_2O \\rightleftharpoons HX + HXO',
					'Lý thuyết':
						'Fluorine phản ứng mãnh liệt với nước. Chlorine, bromine, iodine phản ứng thuận nghịch với nước tạo ra hỗn hợp hai acid. Khả năng phản ứng giảm dần từ Cl₂ đến I₂.',
					UUID: '45f9f95a-f776-4934-8df3-55b6c69d6c86',
				},
				'Hydrogen Halide và Hydrohalic acid': {
					'Công thức': '',
					'Lý thuyết':
						'Hydrogen halide (HX) là các hợp chất khí, tan tốt trong nước tạo thành dung dịch hydrohalic acid. Từ HF đến HI, nhiệt độ sôi tăng dần (trừ HF có nhiệt độ sôi cao bất thường do liên kết hydrogen). Tính acid của các dung dịch tăng dần từ HF đến HI.',
					UUID: 'e47d6926-b960-45b6-b82e-5b7590b2bf64',
				},
				'Nhận biết ion Halide': {
					'Công thức': 'Ag^+ + X^- \\rightarrow AgX\\downarrow',
					'Lý thuyết':
						'Dùng dung dịch silver nitrate (AgNO₃) để nhận biết các ion halide (trừ F⁻). AgCl là kết tủa trắng, AgBr là kết tủa vàng nhạt, AgI là kết tủa vàng.',
					UUID: 'ec61f12b-783e-4878-b813-6686a78a7940',
				},
			},
		},
		11: {
			'Cân bằng hóa học': {
				'Phản ứng thuận nghịch và Cân bằng hóa học': {
					'Công thức': 'aA + bB \\rightleftharpoons cC + dD',
					'Lý thuyết':
						'Phản ứng thuận nghịch là phản ứng xảy ra theo hai chiều ngược nhau trong cùng điều kiện. Cân bằng hóa học là trạng thái của phản ứng thuận nghịch khi tốc độ phản ứng thuận bằng tốc độ phản ứng nghịch (v_t = v_n).',
					UUID: 'f8a19d27-da1c-445c-a252-2f4706018bb5',
				},
				'Hằng số cân bằng (Kc)': {
					'Công thức': 'K_C = \\frac{[C]^c [D]^d}{[A]^a [B]^b}',
					'Lý thuyết':
						'Là đại lượng đặc trưng cho một cân bằng hóa học xác định, chỉ phụ thuộc vào nhiệt độ. Nồng độ của chất rắn không được biểu diễn trong biểu thức hằng số cân bằng.',
					UUID: '723119e7-70bb-4fd0-baea-36e1cf003b01',
				},
				'Nguyên lí chuyển dịch cân bằng Le Chatelier': {
					'Công thức': '',
					'Lý thuyết':
						'Một phản ứng thuận nghịch đang ở trạng thái cân bằng khi chịu một tác động từ bên ngoài như biến đổi nồng độ, áp suất hoặc nhiệt độ thì cân bằng sẽ chuyển dịch theo chiều làm giảm tác động đó. Chất xúc tác không làm chuyển dịch cân bằng.',
					UUID: '02ae056f-1097-4969-b3d1-a013bad82651',
				},
			},
			'Sự điện li và pH': {
				'Sự điện li': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình phân li các chất trong nước ra ion. Chất điện li là chất khi tan trong nước phân li ra ion. Chất điện li mạnh phân li hoàn toàn (HCl, NaOH, NaCl). Chất điện li yếu phân li một phần (CH₃COOH, NH₃). Chất không điện li không phân li ra ion (saccharose, ethanol).',
					UUID: '001d91b2-8e77-45c3-81a4-28810a1a8d12',
				},
				'Thuyết acid-base Brønsted–Lowry': {
					'Công thức': '',
					'Lý thuyết':
						'Theo thuyết Brønsted–Lowry: Acid là chất cho proton (H⁺), base là chất nhận proton (H⁺). Acid và base có thể là phân tử hoặc ion. Hợp chất có khả năng vừa cho, vừa nhận proton được gọi là chất lưỡng tính (ví dụ: HCO₃⁻, H₂O).',
					UUID: '26a3a2a7-e717-46fa-9d00-bc017cd968f8',
				},
				'Tích số ion của nước và pH': {
					'Công thức':
						'K_w = [H^+][OH^-] = 1.0 \\times 10^{-14} \\text{ (ở 25°C)}\\npH = -\\log[H^+]',
					'Lý thuyết':
						'Nước là chất điện li rất yếu. Tích số ion của nước là một hằng số ở nhiệt độ xác định. Môi trường acid có [H⁺] > 10⁻⁷ M (pH < 7). Môi trường base có [H⁺] < 10⁻⁷ M (pH > 7). Môi trường trung tính có [H⁺] = 10⁻⁷ M (pH = 7).',
					UUID: '02a9ae44-4fc3-4070-9194-01faefdd04a2',
				},
				'Chuẩn độ acid-base': {
					'Công thức': 'C_{acid} \\times V_{acid} = C_{base} \\times V_{base}',
					'Lý thuyết':
						'Là phương pháp xác định nồng độ của một dung dịch acid hoặc base bằng một dung dịch base hoặc acid đã biết nồng độ (dung dịch chuẩn). Thời điểm mà hai chất phản ứng vừa đủ được gọi là điểm tương đương, nhận biết bằng chất chỉ thị pH.',
					UUID: '4c637b56-c993-4e43-88c5-6669a082923b',
				},
				'Sự thủy phân của ion trong nước': {
					'Công thức':
						'CO_3^{2-} + H_2O \\rightleftharpoons HCO_3^- + OH^-\\nAl^{3+} + 3H_2O \\rightleftharpoons Al(OH)_3\\downarrow + 3H^+',
					'Lý thuyết':
						'Là phản ứng trao đổi ion giữa các ion trong muối và nước. Ion của acid yếu (ví dụ: CH₃COO⁻, CO₃²⁻) bị thủy phân tạo môi trường base. Ion của base yếu (ví dụ: NH₄⁺, Al³⁺, Fe³⁺) bị thủy phân tạo môi trường acid. Ion của acid mạnh và base mạnh không bị thủy phân.',
					UUID: 'cc29b20a-007f-4e06-bb1a-a8314d5ee4d5',
				},
			},
			'Nitrogen - Sulfur': {
				'Nitrogen (N₂)': {
					'Công thức':
						'N_2(g) + 3H_2(g) \\xrightarrow{t^o, p, xt} 2NH_3(g); \\Delta_rH_{298}^o = -92 kJ\\nN_2(g) + O_2(g) \\xrightarrow{3000^oC} 2NO(g); \\Delta_rH_{298}^o = +180 kJ',
					'Lý thuyết':
						'Ở điều kiện thường, nitrogen là chất khí trơ về mặt hóa học do có liên kết ba bền vững (E_b = 945 kJ/mol). Ở nhiệt độ cao, nitrogen thể hiện cả tính oxi hóa (tác dụng với kim loại, H₂) và tính khử (tác dụng với O₂).',
					UUID: '076ceebd-e3a4-49f2-9505-ea0eb42cb836',
				},
				'Ammonia (NH₃) và muối Ammonium': {
					'Công thức':
						'NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-\\nNH_4Cl \\xrightarrow{t^o} NH_3 + HCl\\nNH_4NO_3 \\xrightarrow{t^o} N_2O + 2H_2O',
					'Lý thuyết':
						'Ammonia là một base yếu, tác dụng với nước, acid, dung dịch muối. Ammonia còn là một chất khử mạnh khi tác dụng với oxygen. Muối ammonium dễ tan, là chất điện li mạnh, dễ bị nhiệt phân hủy. Ion NH₄⁺ thể hiện tính acid khi tác dụng với dung dịch base.',
					UUID: '922f4771-69c7-424e-9b55-5203589aa9dd',
				},
				'Hợp chất của Nitrogen với Oxygen': {
					'Công thức': '2NO + O_2 \\rightarrow 2NO_2\\n4NO_2 + O_2 + 2H_2O \\rightarrow 4HNO_3',
					'Lý thuyết':
						'Các oxide của nitrogen (NO, NO₂, N₂O, N₂O₅,...) là các chất khí độc, là nguyên nhân chính gây ra mưa acid và hiện tượng phú dưỡng. Mưa acid là hiện tượng nước mưa có pH < 5,6 do sự hòa tan của SO₂ và các oxide của nitrogen.',
					UUID: '37fa8059-3fa4-497f-8c91-098b9de88c85',
				},
				'Nitric Acid (HNO₃)': {
					'Công thức': 'Cu + 4HNO_3(\\text{đặc}) \\rightarrow Cu(NO_3)_2 + 2NO_2 + 2H_2O',
					'Lý thuyết':
						'Là một acid mạnh, phân li hoàn toàn trong dung dịch. Là một chất oxi hóa rất mạnh, oxi hóa được hầu hết các kim loại (trừ Au, Pt). Tùy thuộc vào nồng độ acid và độ mạnh của chất khử, sản phẩm khử của N⁺⁵ có thể là NO₂, NO, N₂O, N₂, NH₄NO₃.',
					UUID: 'ee7a0591-679c-4ac4-8ef4-c5de9f22edac',
				},
				'Sulfur (S) và Sulfur Dioxide (SO₂)': {
					'Công thức': 'S + O_2 \\xrightarrow{t^o} SO_2\\nSO_2 + 2H_2S \\rightarrow 3S + 2H_2O',
					'Lý thuyết':
						'Sulfur là chất rắn, vừa có tính oxi hóa (tác dụng với kim loại, hydrogen), vừa có tính khử (tác dụng với oxygen, fluorine). Sulfur dioxide (SO₂) là khí độc, vừa là chất khử, vừa là chất oxi hóa, là một trong các nguyên nhân chính gây mưa acid.',
					UUID: 'cba67bc1-8986-4a39-a42c-b9b39db9818a',
				},
				'Sulfuric Acid (H₂SO₄) và muối Sulfate': {
					'Công thức':
						'C_{12}H_{22}O_{11} \\xrightarrow{H_2SO_4 \\text{ đặc}} 12C + 11H_2O\\nBa^{2+} + SO_4^{2-} \\rightarrow BaSO_4\\downarrow',
					'Lý thuyết':
						'Dung dịch H₂SO₄ loãng có đầy đủ tính chất của một acid mạnh. Dung dịch H₂SO₄ đặc, nóng có tính oxi hóa mạnh (oxi hóa được hầu hết kim loại, nhiều phi kim) và tính háo nước. Ion sulfate (SO₄²⁻) được nhận biết bằng ion Ba²⁺ tạo kết tủa trắng BaSO₄.',
					UUID: 'b2bfb46d-2977-43c7-ab4f-ea84d89bae20',
				},
			},
			'Đại cương Hóa học hữu cơ': {
				'Hợp chất hữu cơ và Phân loại': {
					'Công thức': '',
					'Lý thuyết':
						'Hợp chất hữu cơ là hợp chất của carbon (trừ CO, CO₂, muối carbonate, cyanide,...). Hóa học hữu cơ là ngành hóa học nghiên cứu về các hợp chất hữu cơ. Hợp chất hữu cơ được phân loại thành hydrocarbon (chỉ chứa C, H) và dẫn xuất của hydrocarbon (ngoài C, H còn có các nguyên tố khác như O, N, S, halogen...).',
					UUID: '6460e3f0-43cd-4dad-8ad9-a59289efc6c9',
				},
				'Công thức phân tử và Phân tích nguyên tố': {
					'Công thức':
						'C_xH_yO_zN_t: x:y:z:t = \\frac{\\%C}{12} : \\frac{\\%H}{1} : \\frac{\\%O}{16} : \\frac{\\%N}{14}',
					'Lý thuyết':
						'Phân tích nguyên tố dùng để xác định phần trăm khối lượng các nguyên tố trong hợp chất hữu cơ. Từ đó, lập được công thức đơn giản nhất. Kết hợp với phân tử khối (xác định bằng phổ khối lượng - MS), ta có thể lập được công thức phân tử.',
					UUID: 'a6fc9af2-cb4b-4af0-b9b2-971fae869dbb',
				},
				'Cấu tạo hóa học và Đồng phân': {
					'Công thức': '',
					'Lý thuyết':
						'Thuyết cấu tạo hóa học: 1. Trong phân tử hợp chất hữu cơ, các nguyên tử liên kết với nhau theo đúng hóa trị và theo một thứ tự nhất định. 2. Trong phân tử hợp chất hữu cơ, carbon có hóa trị 4. 3. Tính chất của các chất phụ thuộc vào thành phần phân tử và cấu tạo hóa học. Đồng phân là những chất khác nhau nhưng có cùng công thức phân tử.',
					UUID: 'fc64aceb-5074-4ca2-a111-d4d1cb989c8d',
				},
				'Đồng đẳng': {
					'Công thức': '',
					'Lý thuyết':
						'Đồng đẳng là những hợp chất hữu cơ có thành phần phân tử hơn kém nhau một hay nhiều nhóm -CH₂- và có tính chất hóa học tương tự nhau.',
					UUID: 'db2559c8-cb79-48c7-8c8c-72b5c3696c4b',
				},
				'Phương pháp tách và tinh chế': {
					'Công thức': '',
					'Lý thuyết':
						'Các phương pháp phổ biến để tách và tinh chế hợp chất hữu cơ bao gồm: Chưng cất (tách các chất lỏng có nhiệt độ sôi khác nhau), Chiết (tách chất dựa vào độ tan khác nhau trong các dung môi không trộn lẫn), Kết tinh (tách chất rắn dựa vào độ tan và sự thay đổi nhiệt độ), Sắc kí cột (tách các chất dựa vào sự hấp phụ khác nhau trên pha tĩnh và sự di chuyển khác nhau trong pha động).',
					UUID: '6bf378bb-a2c9-472a-9051-df29ae096d6a',
				},
			},
			Hydrocarbon: {
				Alkane: {
					'Công thức':
						'C_nH_{2n+2} \\; (n \\ge 1)\\nC_nH_{2n+2} + X_2 \\xrightarrow{\\text{as/t}^o} C_nH_{2n+1}X + HX\\nC_nH_{2n+2} + (\\frac{3n+1}{2})O_2 \\xrightarrow{t^o} nCO_2 + (n+1)H_2O',
					'Lý thuyết':
						'Là những hydrocarbon no, mạch hở, trong phân tử chỉ có liên kết đơn. Phản ứng đặc trưng là phản ứng thế (halogenation). Phản ứng cracking bẻ gãy mạch carbon. Phản ứng cháy tỏa nhiều nhiệt.',
					UUID: '75d4ca19-3895-4801-8a7f-3462bf20e21c',
				},
				Alkene: {
					'Công thức':
						'C_nH_{2n} \\; (n \\ge 2)\\nCH_2=CH_2 + H_2 \\xrightarrow{Ni, t^o} CH_3-CH_3\\nCH_2=CH_2 + Br_2 \\rightarrow CH_2Br-CH_2Br\\nnCH_2=CH_2 \\xrightarrow{t^o, p, xt} (-CH_2-CH_2-)_n',
					'Lý thuyết':
						'Là những hydrocarbon không no, mạch hở, trong phân tử có một liên kết đôi C=C. Phản ứng đặc trưng là phản ứng cộng (H₂, halogen, HX, H₂O). Alkenes cũng tham gia phản ứng trùng hợp và phản ứng oxi hóa (làm mất màu dung dịch KMnO₄).',
					UUID: '3f4a3f2d-9912-4cb9-9015-fb66bcfffa7d',
				},
				Alkyne: {
					'Công thức':
						'C_nH_{2n-2} \\; (n \\ge 2)\\nCH\\equiv CH + 2H_2 \\xrightarrow{Ni, t^o} CH_3-CH_3\\nCH\\equiv CH + 2Br_2 \\rightarrow CHBr_2-CHBr_2\\nCH\\equiv CH + 2AgNO_3 + 2NH_3 \\rightarrow AgC\\equiv CAg\\downarrow + 2NH_4NO_3',
					'Lý thuyết':
						'Là những hydrocarbon không no, mạch hở, trong phân tử có một liên kết ba C≡C. Tính chất hóa học tương tự alkene, tham gia phản ứng cộng với H₂, halogen, HX,... qua hai giai đoạn. Các alk-1-yne (alkyne có liên kết ba ở đầu mạch) có phản ứng thế ion kim loại (phản ứng với dung dịch AgNO₃/NH₃ tạo kết tủa).',
					UUID: '8c70e73e-5991-4ce8-8890-b21881daaf95',
				},
				'Quy tắc Markovnikov và Zaitsev': {
					'Công thức': '',
					'Lý thuyết':
						'Quy tắc Markovnikov (cộng): Trong phản ứng cộng HX vào alkene không đối xứng, nguyên tử H ưu tiên cộng vào nguyên tử carbon bậc thấp hơn (có nhiều H hơn) ở liên kết đôi. Quy tắc Zaitsev (tách): Trong phản ứng tách HX khỏi dẫn xuất halogen, nguyên tử H ưu tiên bị tách ra cùng với X từ nguyên tử carbon bậc cao hơn bên cạnh.',
					UUID: '61c21b26-9220-42e8-92ab-ddcbec341663',
				},
				'Arene (Hydrocarbon thơm)': {
					'Công thức':
						'C_6H_6 + Br_2 \\xrightarrow{FeBr_3, t^o} C_6H_5Br + HBr\\nC_6H_6 + HNO_3(\\text{đặc}) \\xrightarrow{H_2SO_4(\\text{đặc}), t^o} C_6H_5NO_2 + H_2O\\nC_6H_6 + 3H_2 \\xrightarrow{Ni, t^o, p} C_6H_{12}',
					'Lý thuyết':
						'Là những hydrocarbon có chứa vòng benzene. Tính chất hóa học đặc trưng của benzene là thơm: dễ tham gia phản ứng thế, khó tham gia phản ứng cộng và bền vững với các chất oxi hóa. Các nhóm thế có sẵn trên vòng ảnh hưởng đến khả năng phản ứng và hướng của phản ứng thế tiếp theo.',
					UUID: 'e44b594f-6b03-4797-986e-8101272f1c60',
				},
			},
			'Dẫn xuất của Hydrocarbon': {
				'Dẫn xuất Halogen': {
					'Công thức':
						'R-X + NaOH \\xrightarrow{t^o} R-OH + NaX\\nCH_3CH_2Cl + KOH \\xrightarrow{C_2H_5OH, t^o} CH_2=CH_2 + KCl + H_2O',
					'Lý thuyết':
						'Là hợp chất thu được khi thay thế một hay nhiều nguyên tử hydrogen trong phân tử hydrocarbon bằng một hay nhiều nguyên tử halogen. Tham gia phản ứng thế nguyên tử halogen bằng nhóm -OH (phản ứng thủy phân) và phản ứng tách hydrogen halide (theo quy tắc Zaitsev).',
					UUID: 'c2491513-1828-47e1-b258-1f4de0825d9e',
				},
				Alcohol: {
					'Công thức':
						'C_nH_{2n+1}OH \\; (n \\ge 1)\\n2C_2H_5OH + 2Na \\rightarrow 2C_2H_5ONa + H_2\\uparrow\\nC_2H_5OH \\xrightarrow{H_2SO_4 \\text{ đặc}, 170^oC} CH_2=CH_2 + H_2O\\nR-CH_2OH + CuO \\xrightarrow{t^o} R-CHO + Cu + H_2O',
					'Lý thuyết':
						'Là hợp chất hữu cơ có nhóm hydroxy (-OH) liên kết với nguyên tử carbon no. Alcohol có phản ứng thế nguyên tử H của nhóm -OH (tác dụng với kim loại kiềm), phản ứng tách nước tạo alkene hoặc ether, và phản ứng oxi hóa (alcohol bậc I tạo aldehyde, alcohol bậc II tạo ketone). Polyalcohol có các nhóm -OH kề nhau hòa tan được Cu(OH)₂ tạo dung dịch màu xanh lam đặc trưng.',
					UUID: 'aec2ad86-afe4-4122-ade5-f814bc7cb691',
				},
				Phenol: {
					'Công thức':
						'C_6H_5OH + NaOH \\rightarrow C_6H_5ONa + H_2O\\nC_6H_5OH + 3Br_2 \\rightarrow C_6H_2Br_3OH\\downarrow + 3HBr',
					'Lý thuyết':
						'Là hợp chất hữu cơ có nhóm -OH liên kết trực tiếp với vòng benzene. Do ảnh hưởng của vòng benzene, phenol có tính acid yếu (mạnh hơn alcohol, yếu hơn carbonic acid), tác dụng được với dung dịch base mạnh. Do ảnh hưởng của nhóm -OH, phenol dễ tham gia phản ứng thế vào vòng benzene hơn (với nước bromine, HNO₃) và ưu tiên thế vào các vị trí ortho, para.',
					UUID: '1304406e-dcbc-4605-b107-1873cb34f455',
				},
				'Hợp chất Carbonyl (Aldehyde - Ketone)': {
					'Công thức':
						'R-CHO + H_2 \\xrightarrow{Ni, t^o} R-CH_2OH\\nR-CHO + 2[Ag(NH_3)_2]OH \\xrightarrow{t^o} R-COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O\\nCH_3-CO-R + 3I_2 + 4NaOH \\rightarrow CHI_3\\downarrow + R-COONa + 3NaI + 3H_2O',
					'Lý thuyết':
						'Là hợp chất hữu cơ có chứa nhóm carbonyl (>C=O). Aldehyde có nhóm -CHO, ketone có nhóm >C=O liên kết với hai gốc hydrocarbon. Cả aldehyde và ketone đều tham gia phản ứng cộng (khử bởi H₂) tạo alcohol. Aldehyde có tính khử mạnh, tham gia phản ứng tráng bạc và phản ứng với Cu(OH)₂/OH⁻. Phản ứng iodoform dùng để nhận biết các hợp chất có nhóm CH₃-CO-.',
					UUID: '7d5b0995-c331-479c-b5e9-ef107fd2d08c',
				},
				'Carboxylic Acid': {
					'Công thức':
						"C_nH_{2n+1}COOH \\; (n \\ge 0)\\nRCOOH \\rightleftharpoons RCOO^- + H^+\\nRCOOH + R'OH \\rightleftharpoons RCOOR' + H_2O \\; (H_2SO_4 \\text{đặc}, t^o)",
					'Lý thuyết':
						'Là hợp chất hữu cơ có nhóm carboxyl (-COOH). Carboxylic acid có đầy đủ tính chất của một acid: làm đổi màu quỳ tím, tác dụng với base, oxide base, muối của acid yếu hơn và kim loại đứng trước H. Phản ứng đặc trưng là phản ứng ester hóa với alcohol.',
					UUID: '07fc7abe-bc42-4657-bfc8-ba1974930f4b',
				},
			},
		},
		12: {
			'Ester - Lipid': {
				Ester: {
					'Công thức':
						"R-COOH + R'-OH \\rightleftharpoons R-COO-R' + H_2O \\; (H_2SO_4 \\text{đặc}, t^o)",
					'Lý thuyết':
						"Ester là sản phẩm của phản ứng giữa carboxylic acid và alcohol. Công thức chung là RCOOR', với R là gốc hydrocarbon hoặc H, R' là gốc hydrocarbon. Phản ứng thủy phân trong môi trường acid là phản ứng thuận nghịch. Phản ứng thủy phân trong môi trường base (phản ứng xà phòng hóa) là phản ứng một chiều, tạo ra muối và alcohol.",
					UUID: 'b674086c-29ab-4606-afff-87336d7e2b08',
				},
				'Lipid (Chất béo)': {
					'Công thức': '(RCOO)_3C_3H_5 + 3NaOH \\xrightarrow{t^o} 3RCOONa + C_3H_5(OH)_3',
					'Lý thuyết':
						'Lipid là những hợp chất hữu cơ có trong tế bào sống, không tan trong nước nhưng tan trong các dung môi hữu cơ không phân cực. Chất béo (triglyceride) là triester của glycerol với các acid béo. Acid béo là các carboxylic acid đơn chức, mạch dài, không phân nhánh. Chất béo lỏng (chứa gốc acid béo không no) có thể tham gia phản ứng cộng hydrogen (hydrogen hóa) để chuyển thành chất béo rắn (chứa gốc acid béo no).',
					UUID: 'a3f39e72-1c8c-412e-a2fc-e2b59cea6029',
				},
				'Xà phòng và Chất giặt rửa': {
					'Công thức': '',
					'Lý thuyết':
						"Xà phòng là hỗn hợp muối sodium hoặc potassium của acid béo. Chất giặt rửa tổng hợp là những chất không phải muối của acid béo nhưng có tính năng giặt rửa tương tự xà phòng. Cả hai đều có cấu trúc gồm một 'đầu' ưa nước (ion) và một 'đuôi' kị nước (mạch hydrocarbon dài), có tác dụng làm giảm sức căng bề mặt của nước và phân tán chất bẩn.",
					UUID: '205160fc-01c9-4cc7-90a7-57d87d736ed9',
				},
			},
			Carbohydrate: {
				'Khái niệm và Phân loại': {
					'Công thức': 'C_n(H_2O)_m',
					'Lý thuyết':
						'Carbohydrate là những hợp chất hữu cơ tạp chức, thường có công thức chung là C_n(H_2O)_m. Chúng được chia thành 3 loại chính: monosaccharide (glucose, fructose), disaccharide (saccharose, maltose) và polysaccharide (tinh bột, cellulose).',
					UUID: 'a05390eb-dade-4f37-a17d-0a9b95561d58',
				},
				'Glucose và Fructose': {
					'Công thức':
						'C_6H_{12}O_6 + 2[Ag(NH_3)_2]OH \\xrightarrow{t^o} CH_2OH[CHOH]_4COONH_4 + 2Ag\\downarrow + 3NH_3 + H_2O\\nC_6H_{12}O_6 \\xrightarrow{\\text{enzyme}} 2C_2H_5OH + 2CO_2',
					'Lý thuyết':
						'Là các monosaccharide, công thức phân tử C_6H_{12}O_6. Tồn tại ở cả dạng mạch hở và mạch vòng. Có tính chất của polyalcohol (tác dụng với Cu(OH)₂ ở nhiệt độ thường tạo dung dịch xanh lam) và có phản ứng lên men. Glucose có nhóm -CHO nên có tính khử (phản ứng tráng bạc, làm mất màu nước bromine). Fructose có nhóm >C=O nhưng trong môi trường base có thể chuyển hóa thành glucose nên cũng có phản ứng tráng bạc.',
					UUID: 'b8a42655-5def-4f7c-b3d2-9d37d5a81757',
				},
				'Saccharose và Maltose': {
					'Công thức':
						'C_{12}H_{22}O_{11} + H_2O \\xrightarrow{H^+, t^o} C_6H_{12}O_6 (glucose) + C_6H_{12}O_6 (fructose)',
					'Lý thuyết':
						'Là các disaccharide. Saccharose được cấu tạo từ một gốc α-glucose và một gốc β-fructose. Maltose được cấu tạo từ hai gốc α-glucose. Cả hai đều có tính chất của polyalcohol và bị thủy phân tạo monosaccharide. Saccharose không có nhóm hemiacetal tự do nên không có tính khử. Maltose có nhóm hemiacetal tự do nên có tính khử tương tự glucose.',
					UUID: 'b2cf6bbb-800e-4b91-8e56-de5cb0cec391',
				},
				'Tinh bột và Cellulose': {
					'Công thức':
						'(C_6H_{10}O_5)_n + nH_2O \\xrightarrow{H^+, t^o} nC_6H_{12}O_6\\n[C_6H_7O_2(OH)_3]_n + 3nHNO_3(\\text{đặc}) \\xrightarrow{H_2SO_4(\\text{đặc})} [C_6H_7O_2(ONO_2)_3]_n + 3nH_2O',
					'Lý thuyết':
						'Là các polysaccharide, công thức (C_6H_{10}O_5)_n. Tinh bột được tạo bởi các gốc α-glucose, gồm amylose (mạch thẳng) và amylopectin (mạch nhánh). Cellulose được tạo bởi các gốc β-glucose (mạch thẳng). Cả hai đều bị thủy phân đến cùng tạo glucose. Tinh bột có phản ứng đặc trưng với iodine tạo màu xanh tím. Cellulose có phản ứng với HNO₃ đặc tạo cellulose trinitrate.',
					UUID: '171c68e1-87d4-4d9e-b5a0-e6da03780c80',
				},
			},
			'Hợp chất chứa Nitrogen': {
				Amine: {
					'Công thức':
						'R-NH_2 + H_2O \\rightleftharpoons R-NH_3^+ + OH^-\\nR-NH_2 + HCl \\rightarrow R-NH_3Cl',
					'Lý thuyết':
						'Amine là hợp chất hữu cơ được coi là dẫn xuất của ammonia khi thay thế một hay nhiều nguyên tử hydrogen bằng gốc hydrocarbon. Amine có tính base, thể hiện qua phản ứng với nước và acid. Aniline (C₆H₅NH₂) có tính base rất yếu. Amine bậc 1, 2, 3 có phản ứng khác nhau với nitrous acid (HNO₂). Aniline phản ứng với nước bromine tạo kết tủa trắng.',
					UUID: 'f4808519-7b0a-4670-ae1c-76d618851e3e',
				},
				'Amino Acid': {
					'Công thức':
						'H_2N-R-COOH + NaOH \\rightarrow H_2N-R-COONa + H_2O\\nH_2N-R-COOH + HCl \\rightarrow ClH_3N-R-COOH',
					'Lý thuyết':
						'Amino acid là hợp chất hữu cơ tạp chức, phân tử chứa đồng thời nhóm amino (-NH₂) và nhóm carboxyl (-COOH). Amino acid tồn tại chủ yếu ở dạng ion lưỡng cực. Chúng có tính lưỡng tính, vừa tác dụng với acid, vừa tác dụng với base. Chúng còn có phản ứng ester hóa của nhóm -COOH và phản ứng trùng ngưng tạo liên kết peptide.',
					UUID: 'faa3bd72-66df-4c87-9ba9-907cb1a247b9',
				},
				'Peptide và Protein': {
					'Công thức': '',
					'Lý thuyết':
						'Liên kết peptide là liên kết -CO-NH- giữa hai đơn vị α-amino acid. Peptide là hợp chất chứa từ 2 đến 50 gốc α-amino acid liên kết với nhau bằng các liên kết peptide. Protein là những polypeptide cao phân tử. Cả peptide (từ 2 liên kết trở lên) và protein đều có phản ứng màu biuret với Cu(OH)₂ trong môi trường kiềm tạo phức chất màu tím. Chúng cũng bị thủy phân trong môi trường acid hoặc base tạo ra các amino acid.',
					UUID: 'ccdc6458-2895-4911-8a0a-de8631f332d1',
				},
				Enzyme: {
					'Công thức': '',
					'Lý thuyết':
						'Enzyme là những protein có khả năng xúc tác cho các phản ứng hóa học. Mỗi enzyme thường chỉ xúc tác cho một phản ứng nhất định. Hoạt động của enzyme có tính chọn lọc cao và hiệu quả ở điều kiện nhiệt độ, pH xác định.',
					UUID: 'b4f48bb1-6a20-47cf-98b5-690454f0224c',
				},
			},
			'Polymer và Vật liệu Polymer': {
				'Đại cương về Polymer': {
					'Công thức':
						'nCH_2=CH_2 \\xrightarrow{t^o, p, xt} (-CH_2-CH_2-)_n\\nnH_2N-[CH_2]_5-COOH \\xrightarrow{t^o} (-NH-[CH_2]_5-CO-)_n + nH_2O',
					'Lý thuyết':
						'Polymer là hợp chất có phân tử khối rất lớn do nhiều đơn vị nhỏ (monomer) liên kết với nhau. Phản ứng tạo polymer gồm phản ứng trùng hợp (cộng nhiều monomer giống nhau hoặc tương tự nhau) và phản ứng trùng ngưng (kết hợp nhiều monomer, có loại ra các phân tử nhỏ như nước).',
					UUID: 'e17db929-fe7b-4403-b5e9-b5805b668d4d',
				},
				'Vật liệu Polymer': {
					'Công thức': '',
					'Lý thuyết':
						'Chất dẻo là vật liệu polymer có tính dẻo. Tơ là vật liệu polymer hình sợi dài, mảnh. Cao su là vật liệu polymer có tính đàn hồi. Keo dán là vật liệu có khả năng kết dính các mảnh vật liệu. Vật liệu composite gồm chất nền polymer và chất độn để tăng cường tính chất.',
					UUID: '35d9b9d8-eec8-48e1-82ec-ac62ae565a48',
				},
				'Cao su': {
					'Công thức': '',
					'Lý thuyết':
						'Cao su thiên nhiên là polymer của isoprene. Cao su tổng hợp gồm các loại như buna, buna-S, buna-N, isoprene, chloroprene. Lưu hóa cao su là quá trình tạo các cầu nối disulfide (-S-S-) giữa các mạch polymer, làm tăng độ đàn hồi, độ bền và khả năng chịu nhiệt của cao su.',
					UUID: '4e8c3fdc-36bb-48e5-b2c5-60d5bbb79277',
				},
			},
			'Điện hóa học': {
				'Pin điện hóa (Pin Galvanic)': {
					'Công thức': 'E_{pin} = E_{cathode} - E_{anode}',
					'Lý thuyết':
						'Là thiết bị biến đổi hóa năng thành điện năng. Gồm hai điện cực khác nhau nhúng trong dung dịch điện li. Anode (cực âm) là nơi xảy ra sự oxi hóa. Cathode (cực dương) là nơi xảy ra sự khử. Suất điện động của pin được tính bằng hiệu thế điện cực của cathode và anode.',
					UUID: '00e0faa7-4908-41f6-bab6-69324242f75b',
				},
				'Dãy thế điện cực chuẩn của kim loại': {
					'Công thức': '',
					'Lý thuyết':
						'Sắp xếp các cặp oxi hóa - khử của kim loại theo chiều tăng dần giá trị thế điện cực chuẩn. Dãy này cho phép so sánh tính khử của kim loại và tính oxi hóa của ion kim loại, từ đó dự đoán chiều của phản ứng oxi hóa - khử theo quy tắc alpha (α).',
					UUID: '191d9605-8a3f-4445-9263-860f988eea1d',
				},
				'Ăn mòn kim loại': {
					'Công thức': 'Fe \\rightarrow Fe^{2+} + 2e\\n2H^+ + 2e \\rightarrow H_2',
					'Lý thuyết':
						'Là sự phá hủy kim loại hoặc hợp kim do tác dụng của các chất trong môi trường. Có hai loại chính: ăn mòn hóa học và ăn mòn điện hóa. Ăn mòn điện hóa xảy ra khi các kim loại khác nhau (hoặc kim loại và phi kim) tiếp xúc với nhau và cùng tiếp xúc với dung dịch chất điện li, tạo thành một pin điện hóa mà ở đó kim loại có tính khử mạnh hơn bị ăn mòn (là cực âm).',
					UUID: 'bb5b5155-b1f4-4030-ad5d-fbadb26e2b5d',
				},
				'Điện phân': {
					'Công thức':
						'2NaCl + 2H_2O \\xrightarrow{\\text{điện phân dung dịch, có màng ngăn}} 2NaOH + H_2 + Cl_2',
					'Lý thuyết':
						'Là quá trình sử dụng năng lượng điện để thực hiện một phản ứng oxi hóa - khử không tự xảy ra. Tại cathode (cực âm) xảy ra quá trình khử (cation hoặc nước). Tại anode (cực dương) xảy ra quá trình oxi hóa (anion hoặc nước). Điện phân được ứng dụng để điều chế kim loại, phi kim và nhiều hợp chất, cũng như trong mạ điện.',
					UUID: '0c6d6934-1d32-4806-8540-caa100d8035c',
				},
			},
			'Hóa học kim loại': {
				'Đại cương kim loại': {
					'Công thức': 'M \\rightarrow M^{n+} + ne',
					'Lý thuyết':
						'Kim loại có cấu tạo mạng tinh thể kim loại, liên kết kim loại. Tính chất vật lí chung: tính dẻo, dẫn điện, dẫn nhiệt, ánh kim. Tính chất hóa học đặc trưng là tính khử. Kim loại tác dụng với phi kim, acid, nước (tùy kim loại) và dung dịch muối.',
					UUID: '678df5e4-342e-442d-b102-0ec6df7e73ba',
				},
				'Điều chế kim loại': {
					'Công thức': 'ZnO + C \\xrightarrow{t^o} Zn + CO',
					'Lý thuyết':
						'Nguyên tắc chung là khử ion kim loại thành nguyên tử kim loại. Các phương pháp chính: thủy luyện (dùng kim loại mạnh hơn đẩy kim loại yếu hơn ra khỏi dung dịch muối), nhiệt luyện (dùng chất khử như C, CO, H₂, Al để khử oxide kim loại ở nhiệt độ cao), và điện phân (điện phân nóng chảy đối với kim loại mạnh, điện phân dung dịch đối với kim loại trung bình và yếu).',
					UUID: 'd1a25236-930e-4f03-ba17-2bfb29849158',
				},
				'Kim loại nhóm IA và IIA': {
					'Công thức':
						"2M + 2H_2O \\rightarrow 2MOH + H_2 \\; (M \\in IA)\\nM' + 2H_2O \\rightarrow M'(OH)_2 + H_2 \\; (M' \\in IIA, \\text{trừ Be})",
					'Lý thuyết':
						'Kim loại nhóm IA (kiềm) và IIA (kiềm thổ) là những kim loại có tính khử rất mạnh. Tính khử tăng dần từ trên xuống dưới trong mỗi nhóm. Chúng dễ dàng tác dụng với phi kim, acid và nước. Các hợp chất quan trọng bao gồm NaOH, NaHCO₃, Na₂CO₃, CaCO₃, Ca(OH)₂. Nước cứng là nước chứa nhiều ion Ca²⁺ và Mg²⁺.',
					UUID: 'd3642a47-e6cc-4abb-ab26-144650000e74',
				},
				'Kim loại chuyển tiếp và Phức chất': {
					'Công thức': 'Cu^{2+} + 4NH_3 \\rightarrow [Cu(NH_3)_4]^{2+}',
					'Lý thuyết':
						'Kim loại chuyển tiếp (nhóm B) có nhiều số oxi hóa, có khả năng tạo ion phức. Phức chất là hợp chất tạo bởi ion trung tâm (thường là ion kim loại chuyển tiếp) liên kết với các phân tử hoặc ion xung quanh gọi là phối tử (ligand). Nhiều ion phức có màu đặc trưng.',
					UUID: 'f3b2636b-e346-40c7-819e-6f8458167283',
				},
			},
		},
	},
	sinh: {
		10: {
			'Giới thiệu chung và Các cấp độ tổ chức của thế giới sống': {
				'Các cấp độ tổ chức của thế giới sống': {
					'Công thức': '',
					'Lý thuyết':
						'Thế giới sống được tổ chức theo một trật tự chặt chẽ gồm các cấp độ từ thấp đến cao: Phân tử → Bào quan → Tế bào → Mô → Cơ quan → Hệ cơ quan → Cơ thể → Quần thể → Quần xã - Hệ sinh thái → Sinh quyển. Tổ chức sống cấp trên vừa có những đặc điểm của tổ chức sống cấp dưới, vừa có những đặc tính nổi trội mà tổ chức cấp dưới không có được.',
					UUID: '3407eb7b-49cc-4816-9998-7de7285b6a9f',
				},
				'Đặc điểm chung của thế giới sống': {
					'Công thức': '',
					'Lý thuyết':
						'1. Tổ chức theo nguyên tắc thứ bậc: Cấp độ tổ chức thấp hơn làm nền tảng để xây dựng nên cấp độ tổ chức cao hơn. 2. Hệ thống mở và tự điều chỉnh: Sinh vật ở mọi cấp độ tổ chức đều không ngừng trao đổi vật chất và năng lượng với môi trường, đồng thời có các cơ chế tự điều chỉnh để đảm bảo duy trì và cân bằng các thông số trong hệ thống. 3. Thế giới sống liên tục tiến hoá: Sinh vật không ngừng biến đổi và thích nghi với môi trường sống, tạo nên một thế giới sống đa dạng và phong phú.',
					UUID: '6dc65463-8e27-46e6-9895-31052b37fdbd',
				},
				'Phát triển bền vững': {
					'Công thức': '',
					'Lý thuyết':
						'Là sự phát triển nhằm thoả mãn nhu cầu của thế hệ hiện tại mà không làm tổn hại đến khả năng thoả mãn nhu cầu của các thế hệ tương lai. Phát triển bền vững là sự kết hợp hài hoà giữa các hệ thống: hệ tự nhiên, hệ xã hội và hệ kinh tế.',
					UUID: 'bc3ca71e-7c03-489d-8348-176796f62c27',
				},
			},
			'Thành phần hoá học của tế bào': {
				'Nguyên tố hoá học': {
					'Công thức': '',
					'Lý thuyết':
						'Gồm các nguyên tố đa lượng (chiếm > 0,01% khối lượng cơ thể) như C, H, O, N, S, P,... có vai trò cấu tạo nên các đại phân tử hữu cơ và các nguyên tố vi lượng (chiếm < 0,01% khối lượng cơ thể) như Fe, Mn, Cu, Zn,... có vai trò trong việc hoạt hoá enzyme, là thành phần của nhiều hormone và vitamin.',
					UUID: '55966fbd-32c7-4bbc-b668-9a85902e3975',
				},
				'Nước và vai trò của nước': {
					'Công thức': '',
					'Lý thuyết':
						'Nước được cấu tạo từ một nguyên tử oxygen liên kết với hai nguyên tử hydrogen. Do tính phân cực, các phân tử nước hút nhau và hút các phân tử phân cực khác. Vai trò: là dung môi phổ biến, môi trường của các phản ứng sinh hoá, vận chuyển chất và điều hoà nhiệt độ.',
					UUID: '884511f8-13a1-41ca-bc70-e5283d1ac317',
				},
				Carbohydrate: {
					'Công thức': 'C_n(H_2O)_m',
					'Lý thuyết':
						'Là hợp chất hữu cơ được cấu tạo từ C, H, O. Gồm 3 loại: Monosaccharide (đường đơn, ví dụ: glucose, fructose), Disaccharide (đường đôi, ví dụ: sucrose, lactose) và Polysaccharide (đường đa, ví dụ: tinh bột, glycogen, cellulose). Chức năng chính là cung cấp và dự trữ năng lượng, cấu trúc nên tế bào.',
					UUID: '5193169e-bd8a-4f93-8ed4-43683487dbc5',
				},
				Lipid: {
					'Công thức': '',
					'Lý thuyết':
						'Là nhóm chất hữu cơ kị nước. Gồm lipid đơn giản (chất béo, sáp) và lipid phức tạp (phospholipid, steroid). Chức năng: dự trữ năng lượng, cấu tạo màng sinh chất, là hormone và vitamin.',
					UUID: 'd5fd7b69-fcde-4e63-b1bc-bae70e6da9da',
				},
				Protein: {
					'Công thức': '',
					'Lý thuyết':
						'Là đại phân tử được cấu tạo theo nguyên tắc đa phân từ các đơn phân là amino acid. Có 4 bậc cấu trúc: bậc 1 (chuỗi polypeptide), bậc 2 (xoắn alpha, gấp nếp beta), bậc 3 (cấu trúc không gian 3D), bậc 4 (kết hợp nhiều chuỗi polypeptide). Chức năng rất đa dạng: cấu trúc, xúc tác (enzyme), vận chuyển, bảo vệ (kháng thể), điều hoà, thụ thể.',
					UUID: 'a49bd65a-b786-4b84-a996-d5eab7b67abe',
				},
				'Nucleic acid': {
					'Công thức': '',
					'Lý thuyết':
						'Là đại phân tử được cấu tạo theo nguyên tắc đa phân từ các đơn phân là nucleotide. Mỗi nucleotide gồm 3 thành phần: gốc phosphate, đường pentose, và nitrogenous base. Có 2 loại: DNA (chứa thông tin di truyền) và RNA (tham gia tổng hợp protein).',
					UUID: '143d2cfe-538f-4efd-a685-05e077958daa',
				},
			},
			'Cấu trúc và chức năng của tế bào': {
				'Học thuyết tế bào': {
					'Công thức': '',
					'Lý thuyết':
						'1. Tất cả các sinh vật đều được cấu tạo từ một hoặc nhiều tế bào. 2. Tế bào là đơn vị cơ sở của sự sống. 3. Các tế bào được sinh ra từ các tế bào có trước.',
					UUID: 'aa1bac08-ad0b-4349-a146-6c6cd6c81c04',
				},
				'Tế bào nhân sơ': {
					'Công thức': '',
					'Lý thuyết':
						'Cấu tạo đơn giản, chưa có nhân hoàn chỉnh và không có các bào quan có màng. Vật chất di truyền là một phân tử DNA dạng vòng nằm trong vùng nhân. Có kích thước nhỏ (0,5 - 10 µm).',
					UUID: '4db94dbc-0fdd-4c8c-9535-0eceab24c91b',
				},
				'Tế bào nhân thực': {
					'Công thức': '',
					'Lý thuyết':
						'Cấu tạo phức tạp, có nhân hoàn chỉnh được bao bọc bởi màng nhân. Tế bào chất chứa hệ thống nội màng và các bào quan có màng (ti thể, lục lạp, lysosome,...). Kích thước lớn hơn tế bào nhân sơ (10 - 100 µm).',
					UUID: 'd64bfef5-cb34-4086-a66b-051a66f2c252',
				},
				'Màng sinh chất': {
					'Công thức': '',
					'Lý thuyết':
						'Cấu tạo theo mô hình khảm động, gồm lớp kép phospholipid và các phân tử protein. Chức năng: trao đổi chất chọn lọc, tiếp nhận thông tin, là nơi định vị của nhiều enzyme, nhận biết tế bào và tạo các mối liên kết giữa các tế bào.',
					UUID: '08c3dfe8-6dff-44ea-a0ff-f2789f6c213a',
				},
				'Các bào quan': {
					'Công thức': '',
					'Lý thuyết':
						'Nhân: trung tâm điều khiển hoạt động tế bào. Ti thể: nhà máy năng lượng, nơi diễn ra hô hấp tế bào. Lục lạp (ở thực vật): nơi diễn ra quang hợp. Lưới nội chất: tổng hợp và vận chuyển các chất. Bộ máy Golgi: biến đổi, đóng gói và phân phối sản phẩm. Lysosome: tiêu hoá nội bào. Ribosome: tổng hợp protein.',
					UUID: '9cc5f4db-b3f3-4349-a081-61dfa73688f7',
				},
			},
			'Trao đổi chất và chuyển hoá năng lượng ở tế bào': {
				'Năng lượng và ATP': {
					'Công thức': 'ATP \\rightleftharpoons ADP + P_i + \\text{Năng lượng}',
					'Lý thuyết':
						"Năng lượng trong tế bào tồn tại ở nhiều dạng. ATP (Adenosine triphosphate) là 'đồng tiền' năng lượng của tế bào, cung cấp năng lượng cho mọi hoạt động sống thông qua việc phá vỡ liên kết phosphate cao năng cuối cùng.",
					UUID: 'fc8be0a9-b18e-4591-9b7c-602476443833',
				},
				'Vận chuyển chất qua màng': {
					'Công thức': '',
					'Lý thuyết':
						'Vận chuyển thụ động: không tốn năng lượng, theo chiều gradient nồng độ (khuếch tán, thẩm thấu). Vận chuyển chủ động: tốn năng lượng ATP, ngược chiều gradient nồng độ, cần protein vận chuyển. Nhập bào và xuất bào: vận chuyển các chất có kích thước lớn bằng cách biến dạng màng.',
					UUID: 'd0e84987-d3c7-4cd0-a8d0-74e4eed771ae',
				},
				'Enzyme và xúc tác sinh học': {
					'Công thức': '',
					'Lý thuyết':
						'Enzyme là chất xúc tác sinh học có bản chất là protein, làm tăng tốc độ phản ứng mà không bị biến đổi. Mỗi enzyme có trung tâm hoạt động đặc hiệu với một cơ chất nhất định. Hoạt tính của enzyme bị ảnh hưởng bởi nhiệt độ, pH, nồng độ cơ chất và chất ức chế.',
					UUID: '17f5c9e0-6679-4f94-a497-0122f9655d69',
				},
				'Tổng hợp và phân giải các chất': {
					'Công thức':
						'C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{Năng lượng (ATP + nhiệt)}',
					'Lý thuyết':
						'Tổng hợp (đồng hoá) là quá trình tạo ra các chất phức tạp từ các chất đơn giản, tích luỹ năng lượng (ví dụ: quang hợp). Phân giải (dị hoá) là quá trình phá vỡ các chất phức tạp thành các chất đơn giản, giải phóng năng lượng (ví dụ: hô hấp tế bào, lên men).',
					UUID: 'a2ee247f-cae1-4586-be2c-5cf04f4f47b9',
				},
			},
			'Thông tin giữa các tế bào, chu kì tế bào và phân bào': {
				'Thông tin giữa các tế bào': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình tế bào tiếp nhận, xử lí và trả lời các tín hiệu từ môi trường. Quá trình gồm 3 giai đoạn: Tiếp nhận tín hiệu (thụ thể), truyền tin nội bào (chuỗi các phản ứng hoá học) và đáp ứng (thay đổi hoạt động của tế bào).',
					UUID: '542f85f0-8e18-4cb1-919e-30fba4cb02ad',
				},
				'Chu kì tế bào': {
					'Công thức': '',
					'Lý thuyết':
						'Là một chuỗi các sự kiện có trật tự từ khi tế bào được hình thành cho đến khi nó phân chia. Gồm kì trung gian (pha G1, S, G2) và pha phân bào (pha M). Được kiểm soát chặt chẽ tại các điểm kiểm soát để tránh sai sót.',
					UUID: '38b24dd4-44ae-4fc2-833f-a1720e085fc7',
				},
				'Nguyên phân': {
					'Công thức': '1 \\text{ Tế bào mẹ } (2n) \\rightarrow 2 \\text{ Tế bào con } (2n)',
					'Lý thuyết':
						'Là quá trình phân chia tế bào từ một tế bào mẹ tạo ra hai tế bào con có bộ nhiễm sắc thể giống hệt mẹ. Gồm các kì: kì đầu, kì giữa, kì sau, kì cuối. Giúp cơ thể lớn lên, thay thế các tế bào bị tổn thương.',
					UUID: 'ac475ff2-fd94-48cb-a6a8-f05d3c5d4d7c',
				},
				'Giảm phân': {
					'Công thức': '1 \\text{ Tế bào mẹ } (2n) \\rightarrow 4 \\text{ Tế bào con } (n)',
					'Lý thuyết':
						'Là quá trình phân chia tế bào sinh dục chín, từ một tế bào mẹ (2n) tạo ra bốn tế bào con (n). Gồm hai lần phân bào liên tiếp (Giảm phân I và Giảm phân II). Tạo ra sự đa dạng di truyền thông qua trao đổi chéo và phân li độc lập.',
					UUID: '203a1c02-9a3e-445a-8fd1-420b5ecfde91',
				},
			},
			'Công nghệ tế bào': {
				'Nguyên lí công nghệ tế bào': {
					'Công thức': '',
					'Lý thuyết':
						'Dựa trên tính toàn năng của tế bào (khả năng một tế bào riêng lẻ có thể phát triển thành cơ thể hoàn chỉnh) và khả năng biệt hoá, phản biệt hoá của tế bào. Tế bào được nuôi cấy trong môi trường dinh dưỡng nhân tạo (in vitro) để tạo ra mô, cơ quan hoặc cơ thể.',
					UUID: '290c2409-e3aa-485c-8de9-eb970eceb1fd',
				},
				'Thành tựu công nghệ tế bào thực vật': {
					'Công thức': '',
					'Lý thuyết':
						'Nhân nhanh các giống cây trồng quý hiếm; tạo ra các giống cây trồng sạch bệnh; sản xuất các chất có hoạt tính sinh học; tạo giống cây trồng mới thông qua lai tế bào soma, nuôi cấy hạt phấn, chuyển gene.',
					UUID: '9be5bc98-2eef-47f9-a42e-d946a0e11bf0',
				},
				'Thành tựu công nghệ tế bào động vật': {
					'Công thức': '',
					'Lý thuyết':
						'Tạo mô, cơ quan thay thế (y học tái tạo); nhân bản vô tính động vật (ví dụ: cừu Dolly); tạo động vật chuyển gene để sản xuất thuốc, protein hoặc làm mô hình nghiên cứu bệnh.',
					UUID: 'dfedeca2-0695-445d-847a-80da0609fb01',
				},
			},
			'Sinh học vi sinh vật và Virus': {
				'Khái niệm vi sinh vật': {
					'Công thức': '',
					'Lý thuyết':
						'Là những sinh vật có kích thước rất nhỏ, chỉ quan sát được dưới kính hiển vi. Bao gồm vi khuẩn, nấm men, động vật nguyên sinh, tảo đơn bào và virus. Chúng có khả năng hấp thu và chuyển hoá vật chất nhanh, sinh trưởng và sinh sản rất nhanh.',
					UUID: '3ae383aa-2265-4600-adfd-830dc898bc72',
				},
				'Sinh trưởng của quần thể vi sinh vật': {
					'Công thức': '',
					'Lý thuyết':
						'Trong môi trường nuôi cấy không liên tục, sự sinh trưởng của quần thể vi khuẩn trải qua 4 pha: pha tiềm phát (lag), pha luỹ thừa (log), pha cân bằng và pha suy vong. Bị ảnh hưởng bởi các yếu tố hoá học (chất dinh dưỡng, chất ức chế) và vật lí (nhiệt độ, độ ẩm, pH, ánh sáng).',
					UUID: '6740c05d-0c37-4b60-845b-fcbd9b2c70ab',
				},
				'Tổng hợp và phân giải ở vi sinh vật': {
					'Công thức': '',
					'Lý thuyết':
						'Vi sinh vật có khả năng tổng hợp nhiều chất như amino acid, protein, kháng sinh, enzyme,... và phân giải các chất hữu cơ phức tạp trong môi trường. Các quá trình này được ứng dụng rộng rãi trong công nghiệp thực phẩm, dược phẩm và xử lí ô nhiễm.',
					UUID: '72d4d847-cb33-4aa1-96a7-2afa2175024c',
				},
				Virus: {
					'Công thức': '',
					'Lý thuyết':
						'Là dạng sống chưa có cấu tạo tế bào, kích thước siêu nhỏ, kí sinh nội bào bắt buộc. Cấu tạo gồm lõi nucleic acid (DNA hoặc RNA) và vỏ protein (capsid). Chu trình nhân lên gồm 5 giai đoạn: hấp phụ, xâm nhập, sinh tổng hợp, lắp ráp và phóng thích.',
					UUID: 'b67ef2f5-4921-4d0d-b375-a44068fb58de',
				},
			},
		},
		11: {
			'Trao đổi chất và Chuyển hoá năng lượng ở Thực vật': {
				'Sự hấp thụ nước và khoáng ở rễ': {
					'Công thức': '',
					'Lý thuyết':
						'Nước và ion khoáng được hấp thụ chủ yếu qua miền lông hút của rễ. Có hai cơ chế hấp thụ: Thụ động (nước di chuyển theo cơ chế thẩm thấu từ đất vào rễ, ion khoáng khuếch tán từ nồng độ cao đến thấp) và Chủ động (ion khoáng di chuyển ngược chiều nồng độ, cần năng lượng ATP và protein vận chuyển). Có hai con đường vận chuyển từ lông hút vào mạch gỗ của rễ: Con đường gian bào (đi theo không gian giữa các tế bào, bị chặn bởi đai Caspary ở nội bì) và Con đường tế bào chất (đi xuyên qua tế bào chất của các tế bào).',
					UUID: 'c1d00c2a-c2a8-4bca-9872-4638afad2385',
				},
				'Sự vận chuyển các chất trong thân': {
					'Công thức': '',
					'Lý thuyết':
						'Gồm hai dòng vận chuyển chính: Dòng mạch gỗ (xylem) vận chuyển nước và ion khoáng từ rễ lên các phần trên của cây. Động lực của dòng mạch gỗ gồm: Áp suất rễ (đẩy nước), Lực hút do thoát hơi nước ở lá (động lực chính), và Lực liên kết giữa các phân tử nước với nhau và với thành mạch. Dòng mạch rây (phloem) vận chuyển các chất hữu cơ (chủ yếu là sucrose) được tổng hợp ở lá đến các nơi cần thiết. Động lực của dòng mạch rây là sự chênh lệch áp suất thẩm thấu giữa cơ quan nguồn (lá) và cơ quan chứa (rễ, củ, quả).',
					UUID: '8d681a17-6f0f-430e-87cd-18af75ddcef4',
				},
				'Sự thoát hơi nước ở lá': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình mất nước từ bề mặt lá ra môi trường, tạo động lực chính cho sự vận chuyển nước trong cây và giúp điều hoà nhiệt độ của lá. Có hai con đường: Qua khí khổng (là chủ yếu, tốc độ lớn, được điều chỉnh) và Qua lớp cutin trên bề mặt lá (tốc độ chậm, không được điều chỉnh). Cơ chế đóng mở khí khổng phụ thuộc vào sự thay đổi sức trương nước của hai tế bào hạt đậu (tế bào khí khổng).',
					UUID: 'ace71775-8283-48c3-93ef-f9ab7e4aaca5',
				},
				'Dinh dưỡng khoáng và Nitrogen': {
					'Công thức': '',
					'Lý thuyết':
						'Thực vật cần các nguyên tố khoáng thiết yếu, chia thành hai nhóm: Nguyên tố đại lượng (N, P, K, S, Ca, Mg...) và Nguyên tố vi lượng (Fe, Mn, Zn, Cu, B, Mo...). Nitrogen là nguyên tố đặc biệt quan trọng, được cây hấp thụ dưới dạng ion NH4+ và NO3-. Quá trình cố định nitrogen khí quyển thành dạng cây có thể sử dụng được thực hiện bởi các vi sinh vật.',
					UUID: '86633329-0752-42bf-bc3d-b0f69989332b',
				},
				'Quang hợp ở các nhóm thực vật': {
					'Công thức':
						'6CO_2 + 12H_2O \\xrightarrow{\\text{Ánh sáng, diệp lục}} C_6H_{12}O_6 + 6O_2 + 6H_2O',
					'Lý thuyết':
						'Là quá trình tổng hợp chất hữu cơ từ CO2 và H2O nhờ năng lượng ánh sáng. Gồm pha sáng (tạo ATP, NADPH, giải phóng O2) và pha tối (cố định CO2). Có 3 con đường quang hợp: Thực vật C3 (sản phẩm cố định CO2 đầu tiên là APG 3C, có hô hấp sáng), Thực vật C4 (sản phẩm đầu tiên là AOA 4C, không có hô hấp sáng, thích nghi điều kiện nóng ẩm), và Thực vật CAM (cố định CO2 ban đêm, thích nghi điều kiện khô hạn).',
					UUID: '5a695d08-1920-48b8-92f5-c85c3f622d0b',
				},
				'Hô hấp ở thực vật': {
					'Công thức':
						'C_6H_{12}O_6 + 6O_2 \\rightarrow 6CO_2 + 6H_2O + \\text{Năng lượng (ATP + nhiệt)}',
					'Lý thuyết':
						'Là quá trình phân giải chất hữu cơ để giải phóng năng lượng cho hoạt động sống. Các giai đoạn chính: Đường phân (tế bào chất), Chu trình Krebs (chất nền ti thể), Chuỗi truyền electron (màng trong ti thể). Hô hấp sáng xảy ra ở thực vật C3 khi cường độ ánh sáng cao, gây lãng phí sản phẩm quang hợp.',
					UUID: 'd3c1d85c-2dfc-4a43-93e1-4c7903a68612',
				},
			},
			'Trao đổi chất và Chuyển hoá năng lượng ở Động vật': {
				'Tiêu hoá': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình biến đổi thức ăn thành các chất dinh dưỡng mà cơ thể có thể hấp thụ. Các hình thức: Tiêu hoá nội bào (trong không bào tiêu hoá, ở động vật đơn bào), Tiêu hoá ngoại bào (trong túi tiêu hoá hoặc ống tiêu hoá). Ở người, tiêu hoá diễn ra trong ống tiêu hoá nhờ hoạt động cơ học và hoá học (enzyme).',
					UUID: '6f39652e-768e-459b-9ba2-6edffdfb2adf',
				},
				'Hô hấp (Trao đổi khí)': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình trao đổi khí O2 và CO2 giữa cơ thể và môi trường. Có 4 hình thức chính: Trao đổi khí qua bề mặt cơ thể (ở giun đất, lưỡng cư), Trao đổi khí bằng hệ thống ống khí (ở côn trùng), Trao đổi khí bằng mang (ở cá), và Trao đổi khí bằng phổi (ở bò sát, chim, thú).',
					UUID: 'b0c7e6ed-fa83-4f5d-a774-05364a7c8dce',
				},
				'Tuần hoàn': {
					'Công thức': '',
					'Lý thuyết':
						'Vận chuyển các chất đi nuôi cơ thể và loại bỏ chất thải. Hệ tuần hoàn hở (ở thân mềm, chân khớp): máu không chảy hoàn toàn trong mạch kín, tốc độ chậm. Hệ tuần hoàn kín (ở giun đốt, động vật có xương sống): máu chảy trong mạch kín, áp lực cao. Gồm: Hệ tuần hoàn đơn (ở cá, 1 vòng tuần hoàn) và Hệ tuần hoàn kép (ở lưỡng cư, bò sát, chim, thú, 2 vòng tuần hoàn).',
					UUID: 'e2d377a7-b5d3-4090-a2f5-f33f5456fcd7',
				},
				'Cân bằng nội môi và Bài tiết': {
					'Công thức': '',
					'Lý thuyết':
						'Cân bằng nội môi là sự duy trì ổn định các điều kiện lý hoá của môi trường trong (máu, bạch huyết, dịch mô). Thận đóng vai trò quan trọng trong việc điều hoà áp suất thẩm thấu, pH máu. Bài tiết là quá trình lọc máu và thải các chất cặn bã, sản phẩm thừa ra khỏi cơ thể qua nước tiểu.',
					UUID: '3f8981be-ec19-4532-b51d-8c5eeb039e2d',
				},
				'Miễn dịch': {
					'Công thức': '',
					'Lý thuyết':
						'Là hệ thống phòng thủ của cơ thể chống lại tác nhân gây bệnh. Gồm: Miễn dịch không đặc hiệu (bẩm sinh, đáp ứng tức thì, không cần tiếp xúc trước, gồm các hàng rào vật lí, hoá học và tế bào) và Miễn dịch đặc hiệu (hình thành sau khi tiếp xúc kháng nguyên, có tính đặc hiệu và trí nhớ miễn dịch). Miễn dịch đặc hiệu lại gồm: Miễn dịch thể dịch (do tế bào B sản xuất kháng thể) và Miễn dịch qua trung gian tế bào (do tế bào T độc tiêu diệt tế bào nhiễm bệnh).',
					UUID: '6a503316-31a9-4d26-a69b-9873a3146bab',
				},
			},
			'Cảm ứng ở sinh vật': {
				'Cảm ứng ở thực vật': {
					'Công thức': '',
					'Lý thuyết':
						'Là phản ứng của thực vật đối với kích thích. Gồm: Hướng động (vận động sinh trưởng theo hướng kích thích, ví dụ: hướng sáng, hướng trọng lực) và Ứng động (vận động không theo hướng kích thích, ví dụ: hoa nở, lá cây trinh nữ cụp lại). Cơ chế chủ yếu do sự thay đổi của hormone (hướng động) hoặc sức trương nước (ứng động).',
					UUID: '8ae87a14-dd74-4f43-8c66-c0a0bc6fc8c7',
				},
				'Cảm ứng ở động vật': {
					'Công thức': '',
					'Lý thuyết':
						'Là phản ứng của động vật thông qua hệ thần kinh. Cấu trúc hệ thần kinh tiến hoá từ dạng lưới (ruột khoang) -> dạng chuỗi hạch (giun, côn trùng) -> dạng ống (động vật có xương sống). Phản xạ là cơ sở của cảm ứng, thực hiện qua một cung phản xạ. Có phản xạ không điều kiện (bẩm sinh) và phản xạ có điều kiện (học được).',
					UUID: '2f82e3f4-930f-495e-aa41-5781f4be9e55',
				},
				'Tập tính ở động vật': {
					'Công thức': '',
					'Lý thuyết':
						'Là chuỗi phản ứng trả lời kích thích. Gồm: Tập tính bẩm sinh (di truyền, đặc trưng cho loài, ví dụ: nhện giăng tơ) và Tập tính học được (hình thành trong đời sống). Các hình thức học tập: Quen nhờn, In vết, Điều kiện hoá (đáp ứng và hành động), Học ngầm, Học khôn. Ngoài ra còn có các tập tính xã hội phức tạp (kiếm ăn, bảo vệ lãnh thổ, sinh sản, di cư).',
					UUID: '2c76b002-1f46-4698-9bd8-c7f970ff5d67',
				},
			},
			'Sinh trưởng và Phát triển ở sinh vật': {
				'Sinh trưởng và phát triển ở thực vật': {
					'Công thức': '',
					'Lý thuyết':
						'Sinh trưởng là sự tăng kích thước không thuận nghịch của cơ thể. Phát triển là toàn bộ những biến đổi trong vòng đời. Ở thực vật có mô phân sinh. Sinh trưởng sơ cấp làm cây dài ra, sinh trưởng thứ cấp làm cây to ra. Quá trình này được điều hoà bởi các hormone thực vật (phytohormone) như Auxin, Gibberellin, Cytokinin (kích thích) và Abscisic acid, Ethylene (ức chế).',
					UUID: 'd68c4375-fa44-4e1c-a7f1-8eb29c705e03',
				},
				'Sinh trưởng và phát triển ở động vật': {
					'Công thức': '',
					'Lý thuyết':
						'Phát triển không qua biến thái: con non có hình thái tương tự con trưởng thành. Phát triển qua biến thái: con non có hình thái, cấu tạo khác với con trưởng thành. Gồm: Biến thái không hoàn toàn (ấu trùng lột xác nhiều lần để lớn lên) và Biến thái hoàn toàn (ấu trùng -> nhộng -> con trưởng thành). Quá trình được điều hoà bởi các hormone như GH, thyroxine, testosterone, estrogen (ở động vật có xương sống) và ecdysone, juvenile (ở côn trùng).',
					UUID: '0f10e009-1427-4c74-925f-9acf7bbb6fc8',
				},
			},
			'Sinh sản ở sinh vật': {
				'Sinh sản ở thực vật': {
					'Công thức': '',
					'Lý thuyết':
						'Sinh sản vô tính: tạo cá thể mới từ một phần của cơ thể mẹ (sinh sản sinh dưỡng: giâm, chiết, ghép). Sinh sản hữu tính: có sự kết hợp giao tử, ở thực vật có hoa có quá trình thụ tinh kép tạo ra hợp tử (2n) và nội nhũ (3n).',
					UUID: '54e95225-08b8-4dfa-afa3-128d3b40e456',
				},
				'Sinh sản ở động vật': {
					'Công thức': '',
					'Lý thuyết':
						'Sinh sản vô tính: không có sự kết hợp giao tử (phân đôi, nảy chồi, phân mảnh, trinh sinh). Sinh sản hữu tính: có sự kết hợp giữa tinh trùng và trứng. Có thể thụ tinh ngoài (trong môi trường nước) hoặc thụ tinh trong (trong cơ quan sinh dục của con cái). Quá trình sinh sản được điều hoà bởi hệ thần kinh và các hormone sinh dục.',
					UUID: '8def244e-0292-4e2f-b53d-dfd2b1409596',
				},
			},
		},
		12: {
			'Cơ sở phân tử của Di truyền và Biến dị': {
				'Cấu trúc và chức năng của DNA': {
					'Công thức': 'A+G = T+X',
					'Lý thuyết':
						'DNA (Deoxyribonucleic acid) là vật chất di truyền, cấu tạo từ các nguyên tố C, H, O, N, P. DNA là một đại phân tử, cấu tạo theo nguyên tắc đa phân, đơn phân là các nucleotide (A, T, G, C). Cấu trúc không gian là một chuỗi xoắn kép gồm hai mạch polynucleotide chạy song song, ngược chiều. Các nucleotide trên hai mạch liên kết theo nguyên tắc bổ sung (A-T, G-C). Chức năng: mang, bảo quản và truyền đạt thông tin di truyền.',
					UUID: 'cecf68fc-e6c4-46be-ba6f-f09126b87011',
				},
				'Cơ chế tái bản DNA': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình tạo ra hai phân tử DNA con giống hệt phân tử DNA mẹ. Diễn ra theo nguyên tắc bổ sung (A-T, G-C) và nguyên tắc bán bảo tồn (mỗi DNA con có một mạch của mẹ và một mạch mới được tổng hợp). Quá trình gồm các bước: tháo xoắn, tổng hợp các mạch mới và tạo thành hai phân tử DNA con.',
					UUID: '550c1be4-2ef3-418e-a30c-e26b88de4cda',
				},
				'Gene và mã di truyền': {
					'Công thức': '',
					'Lý thuyết':
						'Gene là một đoạn của phân tử DNA mang thông tin mã hoá cho một sản phẩm xác định (chuỗi polypeptide hoặc phân tử RNA). Mã di truyền là trình tự các nucleotide trong gene quy định trình tự các amino acid trong protein. Mã di truyền là mã bộ ba, được đọc liên tục, có tính đặc hiệu, tính thoái hoá và tính phổ biến. Có bộ ba mở đầu (AUG) và các bộ ba kết thúc (UAA, UAG, UGA).',
					UUID: '268a7928-35c7-49c0-84ef-2e9c7515692b',
				},
				'Cơ chế phiên mã và dịch mã': {
					'Công thức': '',
					'Lý thuyết':
						'Phiên mã là quá trình tổng hợp RNA từ mạch khuôn của gene. Dịch mã là quá trình tổng hợp protein từ thông tin trên phân tử mRNA. Quá trình dịch mã diễn ra tại ribosome, gồm hai giai đoạn: hoạt hoá amino acid và tổng hợp chuỗi polypeptide (mở đầu, kéo dài, kết thúc).',
					UUID: '71cf17e3-0b86-457b-89d6-fd1676db85cf',
				},
				'Điều hoà hoạt động gene': {
					'Công thức': '',
					'Lý thuyết':
						'Là cơ chế kiểm soát lượng sản phẩm của gene được tạo ra. Ở sinh vật nhân sơ, điều hoà chủ yếu ở cấp độ phiên mã (mô hình operon Lac). Ở sinh vật nhân thực, điều hoà phức tạp hơn, diễn ra ở nhiều cấp độ: trước phiên mã, phiên mã, sau phiên mã, dịch mã và sau dịch mã.',
					UUID: '6478926a-9f38-4d7f-a592-7007e7a6e7d6',
				},
				'Đột biến gene': {
					'Công thức': '',
					'Lý thuyết':
						'Là những biến đổi đột ngột trong cấu trúc của gene, xảy ra ở cấp độ phân tử. Gồm các dạng: mất, thêm, hoặc thay thế một hoặc một vài cặp nucleotide. Đột biến gene là nguồn nguyên liệu sơ cấp, chủ yếu cho quá trình tiến hoá.',
					UUID: '18647b1c-feaf-4634-b864-c236412c0703',
				},
			},
			'Cơ sở tế bào học của Di truyền và Biến dị': {
				'Cấu trúc và chức năng của Nhiễm sắc thể (NST)': {
					'Công thức': '',
					'Lý thuyết':
						'NST là cấu trúc mang gene trong nhân tế bào, có khả năng tự nhân đôi, phân li, tổ hợp. Ở sinh vật nhân thực, NST được cấu tạo từ DNA và protein histone, có cấu trúc siêu hiển vi cuộn xoắn qua nhiều cấp độ. Mỗi loài có bộ NST đặc trưng về số lượng, hình dạng và kích thước.',
					UUID: '26af4e72-3e2a-4aa0-bb83-433431194caf',
				},
				'Đột biến cấu trúc NST': {
					'Công thức': '',
					'Lý thuyết':
						'Là những biến đổi trong cấu trúc của NST. Gồm các dạng: Mất đoạn (mất một đoạn NST), Lặp đoạn (một đoạn NST lặp lại một hay nhiều lần), Đảo đoạn (một đoạn NST đứt ra, đảo 180 độ và nối lại), Chuyển đoạn (trao đổi đoạn giữa các NST).',
					UUID: 'e7ae826c-ebc0-49ae-a0a5-b4b710db0dc4',
				},
				'Đột biến số lượng NST': {
					'Công thức': '',
					'Lý thuyết':
						'Là những biến đổi về số lượng trong bộ NST. Gồm hai dạng chính: Đột biến lệch bội (thay đổi số lượng của một hoặc vài cặp NST, ví dụ: 2n+1, 2n-1) và Đột biến đa bội (tăng toàn bộ số bộ NST, ví dụ: 3n, 4n).',
					UUID: '3ca11e58-dffb-4aa4-adbb-5afa9d42c671',
				},
			},
			'Các quy luật di truyền': {
				'Quy luật phân li (Quy luật Mendel 1)': {
					'Công thức': '',
					'Lý thuyết':
						'Mỗi tính trạng do một cặp nhân tố di truyền (allele) quy định. Trong quá trình phát sinh giao tử, các allele của một cặp phân li đồng đều về các giao tử, do đó 50% giao tử chứa allele này và 50% giao tử chứa allele kia. Cơ sở tế bào học là sự phân li của cặp NST tương đồng trong giảm phân.',
					UUID: 'bed781dc-a39d-47b4-a139-595bf5a1b1e8',
				},
				'Quy luật phân li độc lập (Quy luật Mendel 2)': {
					'Công thức': '',
					'Lý thuyết':
						'Các cặp allele quy định các tính trạng khác nhau nằm trên các cặp NST tương đồng khác nhau sẽ phân li độc lập với nhau trong quá trình hình thành giao tử. Cơ sở tế bào học là sự phân li độc lập và tổ hợp tự do của các cặp NST tương đồng khác nhau trong giảm phân.',
					UUID: 'e0b38e7e-d212-4d26-bf4a-37ef2d69fe70',
				},
				'Tương tác gene': {
					'Công thức': '',
					'Lý thuyết':
						'Là sự tác động qua lại giữa các gene không allele trong quá trình hình thành một kiểu hình. Các kiểu tương tác phổ biến: Tương tác bổ sung (ví dụ: 9:7, 9:6:1, 9:3:3:1), Tương tác át chế (ví dụ: 12:3:1, 13:3, 9:3:4), Tương tác cộng gộp (tính trạng số lượng).',
					UUID: '84bdcbac-fadb-467a-855f-a5fd1783e33e',
				},
				'Liên kết gene và Hoán vị gene': {
					'Công thức':
						'f = \\frac{\\text{tổng số cá thể có kiểu hình hoán vị}}{\\text{tổng số cá thể trong phép lai phân tích}} \times 100\\%',
					'Lý thuyết':
						'Liên kết gene là hiện tượng các gene trên cùng một NST di truyền cùng nhau. Hoán vị gene là sự trao đổi các đoạn tương ứng giữa hai chromatid khác nguồn trong cặp NST tương đồng, dẫn đến sự tái tổ hợp của các allele. Tần số hoán vị gene (f) phản ánh khoảng cách tương đối giữa các gene.',
					UUID: '42130ccd-e210-40ac-b31b-c26d95d02cf4',
				},
				'Di truyền liên kết với giới tính': {
					'Công thức': '',
					'Lý thuyết':
						'Là sự di truyền của các tính trạng mà gene quy định nằm trên NST giới tính. Gene trên NST X có thể di truyền chéo. Gene trên NST Y chỉ di truyền thẳng cho giới XY.',
					UUID: 'bde59ac1-23fd-493c-82d3-ee0c4f396af2',
				},
				'Di truyền ngoài nhân': {
					'Công thức': '',
					'Lý thuyết':
						'Là sự di truyền của các gene nằm trong tế bào chất (trong ti thể, lục lạp). Do giao tử cái thường chứa nhiều tế bào chất hơn, nên tính trạng do gene ngoài nhân quy định thường được di truyền theo dòng mẹ.',
					UUID: 'ce901e72-ec5c-41ee-a5cd-17391c3824ef',
				},
				'Ảnh hưởng của môi trường lên sự biểu hiện của gene': {
					'Công thức': '',
					'Lý thuyết':
						'Kiểu hình của một cơ thể là kết quả của sự tương tác giữa kiểu gene và môi trường. Mức phản ứng là tập hợp các kiểu hình của cùng một kiểu gene tương ứng với các môi trường khác nhau. Thường biến là những biến đổi kiểu hình phát sinh trong đời cá thể dưới ảnh hưởng của môi trường, không di truyền.',
					UUID: '6a6f4d54-c472-42b5-bb35-b54161ff362a',
				},
			},
			'Di truyền học quần thể và người': {
				'Di truyền học quần thể': {
					'Công thức': 'p^2(AA) + 2pq(Aa) + q^2(aa) = 1',
					'Lý thuyết':
						'Nghiên cứu cấu trúc di truyền của quần thể (vốn gene). Định luật Hardy-Weinberg mô tả trạng thái cân bằng di truyền trong một quần thể lớn, ngẫu phối, không có đột biến, di-nhập gene và chọn lọc tự nhiên. Công thức p+q=1, trong đó p là tần số allele trội, q là tần số allele lặn.',
					UUID: '3e514265-b4f4-45df-87e8-8db9aa79e00d',
				},
				'Di truyền y học và tư vấn': {
					'Công thức': '',
					'Lý thuyết':
						'Nghiên cứu các bệnh di truyền ở người và đề xuất các biện pháp phòng ngừa, điều trị. Bệnh di truyền phân tử (do đột biến gene, ví dụ: bệnh thiếu máu hồng cầu hình liềm). Bệnh di truyền NST (do đột biến NST, ví dụ: hội chứng Down, Turner, Klinefelter). Tư vấn di truyền giúp các cặp vợ chồng đưa ra quyết định sinh sản phù hợp.',
					UUID: '5492dfea-b50a-4c22-99c5-54898fb4a8cf',
				},
				'Liệu pháp gene và công nghệ gene ở người': {
					'Công thức': '',
					'Lý thuyết':
						'Liệu pháp gene là kĩ thuật chữa bệnh bằng cách thay thế gene bệnh bằng gene lành. Công nghệ gene được ứng dụng để chẩn đoán sớm các bệnh di truyền, sản xuất thuốc và vaccine, và có tiềm năng trong việc điều trị nhiều bệnh tật.',
					UUID: '84e261d4-35f2-43eb-8ad7-8463453959c5',
				},
			},
			'Tiến hoá': {
				'Bằng chứng tiến hoá': {
					'Công thức': '',
					'Lý thuyết':
						'Bao gồm: Bằng chứng hoá thạch (di tích của sinh vật cổ đại). Bằng chứng giải phẫu so sánh (cơ quan tương đồng, cơ quan tương tự, cơ quan thoái hoá). Bằng chứng phôi sinh học (sự giống nhau trong phát triển phôi). Bằng chứng địa lí sinh vật học (sự phân bố của các loài). Bằng chứng sinh học phân tử (sự tương đồng về DNA và protein).',
					UUID: '308a3424-9c4b-411a-aaab-8db05430ef96',
				},
				'Học thuyết Darwin và Thuyết tiến hoá tổng hợp': {
					'Công thức': '',
					'Lý thuyết':
						'Học thuyết Darwin đề cao vai trò của biến dị và chọn lọc tự nhiên. Thuyết tiến hoá tổng hợp hiện đại đã kết hợp học thuyết Darwin với di truyền học, coi quần thể là đơn vị tiến hoá và tiến hoá là quá trình làm thay đổi tần số allele và thành phần kiểu gene của quần thể.',
					UUID: 'd81387f5-8860-4b96-b599-fe4f511d97d9',
				},
				'Các nhân tố tiến hoá': {
					'Công thức': '',
					'Lý thuyết':
						'Là những nhân tố làm thay đổi vốn gene của quần thể. Bao gồm: Đột biến (tạo allele mới), Di-nhập gene (trao đổi gene giữa các quần thể), Chọn lọc tự nhiên (tác động có hướng, giữ lại các cá thể thích nghi), Các yếu tố ngẫu nhiên (biến động di truyền, làm thay đổi tần số allele đột ngột), Giao phối không ngẫu nhiên (thay đổi thành phần kiểu gene).',
					UUID: '8fbbcf8b-3b14-44ba-a5ef-edab57ba85b7',
				},
				'Quá trình hình thành loài': {
					'Công thức': '',
					'Lý thuyết':
						'Là quá trình lịch sử cải biến thành phần kiểu gene của quần thể gốc, dẫn đến sự hình thành loài mới, cách li sinh sản với loài gốc. Các con đường chính: Hình thành loài khác khu vực địa lí (do cách li địa lí) và hình thành loài cùng khu vực địa lí (do cách li sinh thái, cách li tập tính, hoặc đa bội hoá lai xa).',
					UUID: 'a323ffa5-abd8-4c05-aa4d-56ea80989850',
				},
				'Sự phát sinh và phát triển sự sống': {
					'Công thức': '',
					'Lý thuyết':
						'Gồm 3 giai đoạn: Tiến hoá hoá học (tạo chất hữu cơ từ vô cơ), Tiến hoá tiền sinh học (tạo tế bào sơ khai), Tiến hoá sinh học (từ tế bào đầu tiên hình thành các loài). Lịch sử Trái Đất được chia thành các đại: Thái cổ, Nguyên sinh, Cổ sinh (kỷ Cambri, Ordovic, Silur, Devon, Carbon, Permi), Trung sinh (kỷ Trias, Jura, Creta), Tân sinh (kỷ Đệ tam, Đệ tứ).',
					UUID: '14924df9-8123-41bf-b722-156a6305750c',
				},
				'Sự phát sinh loài người': {
					'Công thức': '',
					'Lý thuyết':
						'Loài người (Homo sapiens) có nguồn gốc từ một loài vượn người cổ đại. Quá trình tiến hoá trải qua các dạng trung gian như Australopithecus, Homo habilis, Homo erectus, và Homo neanderthalensis. Các nhân tố xã hội (lao động, ngôn ngữ, tư duy) đóng vai trò quan trọng trong sự tiến hoá của loài người.',
					UUID: 'c61d24d0-bd33-4e6b-ba5a-07a918c24798',
				},
			},
			'Sinh thái học': {
				'Môi trường và các nhân tố sinh thái': {
					'Công thức': '',
					'Lý thuyết':
						'Môi trường là nơi sống của sinh vật, bao gồm các nhân tố sinh thái vô sinh (nhiệt độ, ánh sáng, độ ẩm,...) và hữu sinh (các sinh vật khác, con người). Mỗi loài có một giới hạn sinh thái (khoảng chống chịu, khoảng thuận lợi) đối với từng nhân tố.',
					UUID: 'c26df572-7b09-4c8b-af0e-2b3e237f561b',
				},
				'Quần thể sinh vật': {
					'Công thức': '',
					'Lý thuyết':
						'Là tập hợp các cá thể cùng loài, có các đặc trưng về kích thước, mật độ, tỉ lệ giới tính, cấu trúc tuổi, sự phân bố. Sự tăng trưởng kích thước quần thể có thể theo dạng tiềm năng (đường cong J) hoặc thực tế (đường cong S).',
					UUID: 'c87931a4-1419-4c4a-bc3c-0b34fe97613d',
				},
				'Quan hệ giữa các loài trong quần xã': {
					'Công thức': '',
					'Lý thuyết':
						'Bao gồm các mối quan hệ: Quan hệ hỗ trợ (Cộng sinh: hai bên cùng có lợi và cần thiết; Hợp tác: hai bên cùng có lợi nhưng không nhất thiết phải có nhau; Hội sinh: một bên có lợi, bên kia không ảnh hưởng). Quan hệ đối kháng (Cạnh tranh: các loài tranh giành nguồn sống; Kí sinh: một loài sống bám vào loài khác; Ức chế - cảm nhiễm: một loài vô tình gây hại cho loài khác; Sinh vật ăn sinh vật khác).',
					UUID: '63d85c11-78db-4fcf-9ec0-32d31761c354',
				},
				'Quần xã và Hệ sinh thái': {
					'Công thức': '',
					'Lý thuyết':
						'Quần xã là tập hợp các quần thể khác loài. Hệ sinh thái bao gồm quần xã và sinh cảnh của chúng. Trong hệ sinh thái, vật chất được tuần hoàn theo các chu trình sinh địa hoá (Nước, Carbon, Nitrogen, Phosphorus) và năng lượng được truyền một chiều qua chuỗi và lưới thức ăn. Hiệu suất sinh thái là tỉ lệ năng lượng được chuyển lên bậc dinh dưỡng cao hơn (thường khoảng 10%).',
					UUID: '76c06e84-1704-438d-90f2-9206f0d2f14b',
				},
				'Bảo vệ môi trường và Phát triển bền vững': {
					'Công thức': '',
					'Lý thuyết':
						'Bao gồm các hoạt động bảo tồn đa dạng sinh học, phục hồi các hệ sinh thái bị suy thoái, sử dụng bền vững tài nguyên thiên nhiên và giải quyết các vấn đề môi trường toàn cầu (biến đổi khí hậu, ô nhiễm). Phát triển bền vững là sự hài hoà giữa tăng trưởng kinh tế, công bằng xã hội và bảo vệ môi trường.',
					UUID: 'ac1209a6-a98b-471a-a8bf-53083febf12d',
				},
			},
		},
	},
};
