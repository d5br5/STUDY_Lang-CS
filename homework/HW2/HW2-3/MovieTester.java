public class MovieTester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MovieDB db = new MovieDB();

		String input = "    INSERT     %ACTION%     %test1% ";
		String input2 = "     INSERT         %DRAMA%        %tes2% ";
		String input3 = "     INSERT         %COMEDY%        %test3%";
		String input4 = "INSERT %COMEDY% %test4%";
		String input5 = "INSERT %MELLO% %test5%";
		String input6 = "INSERT %ACTION% %test6%";
		String input7 = "INSERT %DRAMA% %test7%";
		String input8 = "INSERT %HORROR% %test8%";
		String input9 = "INSERT %COMEDY% %test9%";
		
		
		
		try {
		
			// 입력을 해석한다.
			ConsoleCommand command = parse(input);

			// 입력을 처리하는 과제의 복잡한 스펙을 아래의 한 줄로 묘사함으로써
			// 자세한 내용을 생략하고 다른 클래스에 위임한다. 
			command.apply(db);
			
			command = parse(input2);
			command.apply(db);
			
			command = parse(input3);
			command.apply(db);
			
			command = parse(input4);
			command.apply(db);
			
			command = parse(input5);
			command.apply(db);
			
			command = parse(input6);
			command.apply(db);
			
			command = parse(input7);
			command.apply(db);
			
			command = parse(input8);
			command.apply(db);
			
			command = parse(input9);
			command.apply(db);
			
			
			command = parse("PRINT");
			command.apply(db);
			
			System.out.println("Z".compareTo("a"));

			
			// 위와 같은 코드를 통해, 과제 프로그램의 큰 흐름이
			// 입력 - 해석 - 처리 과정을 반복하는 것으로 구성되어 있음을
			// 명확하게 드러낼 수 있다.
		} catch (CommandParseException e) {
			System.err.printf("command parse failure: %s [cmd=%s, input=%s]\n",
					e.getMessage(), e.getCommand(), e.getInput());
			e.printStackTrace(System.err);
		} catch (CommandNotFoundException e) {
			System.err.printf("command not found: %s\n", e.getCommand());
			e.printStackTrace(System.err);
		} catch (Exception e) {
			System.err.printf("unexpected exception with input: [%s]\n", input);
			e.printStackTrace(System.err);
		}
	}
	
	
	private static ConsoleCommand parse(String input) throws Exception {
		// 우선 어떤 종류의 ConsoleCommand 를 생성할 것인지 결정한다.
		ConsoleCommand command = null;
		input = input.trim();
		if (input.startsWith("INSERT")) {
			command = new InsertCmd();
		} else if (input.startsWith("DELETE")) {
			command = new DeleteCmd();
		} else if (input.startsWith("SEARCH")) {
			command = new SearchCmd();
		} else if (input.startsWith("PRINT")) {
			command = new PrintCmd();
		} else {
			throw new CommandNotFoundException(input);
		}

		/*
		 * ConsoleCommand의 종류가 결정되었으니 입력을 각 ConsoleCommand 의 방식에 맞춰
		 * 해석(parse)한다.
		 */
		// command variable should not be null here by throwing exception.
		// TIP: eclipse 에서 parse 위에 커서를 올리고 Ctrl+T 를 누르면 해당 인터페이스를 실제로
		//      구현하고 있는 클래스들의 목록을 확인할 수 있고, 바로 이동할 수 있다.
		command.parse(input);

		// command variable should always be valid here
		// because parse method above throws CommandParseException when arguments are invalid.
		return command;
	}
}
