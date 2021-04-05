public class MovieTester {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		MovieDB db = new MovieDB();

		String input = "PRINT";

//		
		
		
		try {
		
			ConsoleCommand command= parse(input);
			command.apply(db);
			
			command = parse("INSERT %AAR% %CIGHT OF THE LIVING DEAD%");
			command.apply(db);
			
			command = parse("INSERT %BAR% %BXISTENZ%");
			command.apply(db);
			
			command = parse("INSERT %CAR% %AE NEED TO TALK ABOUT KEVIN%");
			command.apply(db);
			
			command = parse("INSERT %DAR% %CXISTENZ%");
			command.apply(db);
			
			command = parse("INSERT %EAR% %DCXISTENZ%");
			command.apply(db);
			
			command = parse("DELETE %CAR% %AE NEED TO TALK ABOUT KEVIN%");
			command.apply(db);
			
			
//			command = parse("DELETE %WAR% %AE NEED TO TALK ABOUT KEVIN%");
//			command.apply(db);
//			
//			command = parse("DELETE %WAR% %DCXISTENZ%");
//			command.apply(db);
//			
//			command = parse("DELETE %MUSIC% %GHOST%");
//			command.apply(db);
//			
//			command = parse("INSERT %WAR% %CXISTENZ%");
//			command.apply(db);
//			
//			command = parse("DELETE %WAR% %BXISTENZ%");
//			command.apply(db);
//		
//
//			command = parse(" DELETE %WAR% %CXISTENZ%");
//			command.apply(db);
//
//			command = parse(" DELETE %WAR% %CIGHT OF THE LIVING DEAD%");
//			command.apply(db);
	
			
			
			
			
			command = parse("PRINT");
			command.apply(db);
			
			
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

		
		command.parse(input);

		// command variable should always be valid here
		// because parse method above throws CommandParseException when arguments are invalid.
		return command;
	}
}
