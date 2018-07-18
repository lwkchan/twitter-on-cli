Feature: Run tweep
  Scenario: Run command
    When I run `tweep t "hello world"` interactively
    And I type "n"
    Then the output should contain:
    """
    Are you sure you want to Tweet:  hello world?
    """
